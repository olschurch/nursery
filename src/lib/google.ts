import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import type { CalendarRow, MenuRow } from '@/types';
import { docs as googleDocs, docs_v1 } from '@googleapis/docs';
import { filterOutPreviousEntries, sortByDate } from './utils';

// hold on to previous result if 429
let cachedResult: {
  events: Record<string, string | number>[] | null;
  menu: Record<string, string | number>[] | null;
} = {
  events: null,
  menu: null,
};

const DEFAULT_IMAGE_WIDTH = 500;

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/documents',
  'https://www.googleapis.com/auth/documents.readonly',
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.readonly',
];

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_API_EMAIL,
  key: process.env.GOOGLE_API_PRIVATE_KEY,
  scopes: SCOPES,
});

export async function getDocumentAsHtml(documentId: string) {
  const docs = googleDocs({ version: 'v1', auth: serviceAccountAuth });

  try {
    const response = await docs.documents.get({
      documentId: documentId,
    });

    const document = response.data;
    let html = '';
    let listStack: { nestingLevel: number; type: 'BULLET' | 'NUMBERED' }[] = [];

    // Function to get image URL
    const getImageUrl = (inlineObjectId: string) => {
      const inlineObject = document?.inlineObjects?.[inlineObjectId];
      if (
        inlineObject?.inlineObjectProperties?.embeddedObject?.imageProperties
      ) {
        return inlineObject.inlineObjectProperties.embeddedObject
          .imageProperties.contentUri;
      }
      return null;
    };

    // Function to process text run
    const processTextRun = (textRun: docs_v1.Schema$TextRun): string => {
      if (!textRun.content || textRun.content === '\n') return '';

      let text = textRun.content;
      const textStyle = textRun.textStyle;

      if (textStyle) {
        if (textStyle.bold) text = `<strong>${text}</strong>`;
        if (textStyle.italic) text = `<em>${text}</em>`;
        if (textStyle.underline) text = `<u>${text}</u>`;
      }

      return text;
    };

    // Function to process paragraph
    const processParagraph = (paragraph: docs_v1.Schema$Paragraph): string => {
      const namedStyleType = paragraph.paragraphStyle?.namedStyleType;
      let paragraphHtml = '';
      let contentHtml = '';

      paragraph.elements?.forEach((element) => {
        if (element.textRun) {
          contentHtml += processTextRun(element.textRun);
        } else if (element.inlineObjectElement) {
          const imageUrl = getImageUrl(
            element.inlineObjectElement.inlineObjectId!,
          );
          if (imageUrl) {
            paragraphHtml += `<img src="${imageUrl}" alt="Inline image" width="${DEFAULT_IMAGE_WIDTH}" loading="lazy"/>`;
          }
        }
      });

      const bulletList = paragraph.bullet;
      if (bulletList) {
        const nestingLevel = bulletList.nestingLevel || 0;
        const listType = bulletList.listId ? 'NUMBERED' : 'BULLET';

        // Close any open lists of higher nesting level
        while (
          listStack.length > 0 &&
          listStack[listStack.length - 1].nestingLevel >= nestingLevel
        ) {
          const closedList = listStack.pop();
          paragraphHtml =
            `</li></${closedList?.type === 'BULLET' ? 'ul' : 'ol'}>` +
            paragraphHtml;
        }

        // Open a new list if necessary
        if (
          listStack.length === 0 ||
          listStack[listStack.length - 1].nestingLevel < nestingLevel
        ) {
          listStack.push({ nestingLevel, type: listType });
          paragraphHtml =
            `<${listType === 'BULLET' ? 'ul' : 'ol'}>` + paragraphHtml;
        }

        // Add the list item
        paragraphHtml += `<li>${contentHtml}`;
      } else {
        // Close all open lists
        while (listStack.length > 0) {
          const closedList = listStack.pop();
          paragraphHtml =
            `</li></${closedList?.type === 'BULLET' ? 'ul' : 'ol'}>` +
            paragraphHtml;
        }

        // Process non-list paragraphs as before
        switch (namedStyleType) {
          case 'TITLE':
            paragraphHtml = `<h1>${contentHtml}</h1>`;
            break;
          case 'HEADING_1':
            paragraphHtml = `<h1>${contentHtml}</h1>`;
            break;
          case 'HEADING_2':
            paragraphHtml = `<h2>${contentHtml}</h2>`;
            break;
          case 'HEADING_3':
            paragraphHtml = `<h3>${contentHtml}</h3>`;
            break;
          default:
            if (contentHtml.trim()) {
              paragraphHtml = `<p>${contentHtml}</p>`;
            }
        }
      }

      return paragraphHtml;
    };

    document?.body?.content?.forEach((element) => {
      if (element.paragraph) {
        html += processParagraph(element.paragraph);
      }
      // Add handling for other element types (lists, tables, etc.) here
    });

    return html;
  } catch (error) {
    console.error('Error fetching document:', (error as Error).message);
    throw error;
  }
}

export async function loadCalendarFromSheet(id: string) {
  const doc = new GoogleSpreadsheet(id, serviceAccountAuth);

  try {
    await doc.loadInfo();

    const events = doc.sheetsByTitle['Events'];
    const menu = doc.sheetsByTitle['Menu'];

    const eventsRows = await events.getRows<CalendarRow>();
    const menuRows = await menu.getRows<MenuRow>();

    const eventsArr = eventsRows.map((row, index) => ({
      Date: row.get('Date'),
      Time: row.get('Time'),
      Title: row.get('Title'),
      Description: row.get('Description'),
      Link: row.get('Link'),
      LinkText: row.get('LinkText'),
    }));

    const menuArr: { date: string; text: string }[] = menuRows.reduce(
      (acc, row) => {
        const date = row.get('Date');
        const am = row.get('AM');
        const pm = row.get('PM');

        return acc.concat([
          {
            date: date,
            text: `AM: ${am}`,
          },
          {
            date: date,
            text: `PM: ${pm}`,
          },
        ]);
      },
      [] as { date: string; text: string }[],
    );

    cachedResult = {
      events: sortByDate(eventsArr),
      menu: sortByDate(menuArr),
    };

    return cachedResult;
  } catch (err) {
    if (cachedResult?.events && cachedResult?.menu) {
      return cachedResult;
    }
  }
}

export { serviceAccountAuth, SCOPES };
