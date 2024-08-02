import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import type { CalendarRow } from '@/types';
import { filterOutPreviousEvents, sortByDate } from '@/app/calendar/utils';
import { docs as googleDocs, docs_v1 } from '@googleapis/docs';
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
            // Images are now added directly to paragraphHtml, not contentHtml
            paragraphHtml += `<img src="${imageUrl}" alt="Inline image" width="${DEFAULT_IMAGE_WIDTH}" loading="lazy"/>`;
          }
        }
      });

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
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows<CalendarRow>();

  const objArr = rows.map((row, index) => ({
    Date: row.get('Date'),
    Time: row.get('Time'),
    Title: row.get('Title'),
    Description: row.get('Description'),
    Link: row.get('Link'),
    LinkText: row.get('LinkText'),
  }));

  // TODO: Move to object
  // const objArr = rows.map((row, index) => ({
  //   date: {
  //     date: row.get('Date'),
  //     time: row.get('Time'),
  //   },
  //   Title: {
  //     content: row.get('Event'),
  //   },
  // }));

  return filterOutPreviousEvents(sortByDate(objArr));
}

export { serviceAccountAuth, SCOPES };
