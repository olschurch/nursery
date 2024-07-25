import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import type { CalendarRow } from '@/types';
import { filterOutPreviousEvents, sortByDate } from '@/app/calendar/utils';

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_API_EMAIL,
  key: process.env.GOOGLE_API_PRIVATE_KEY,
  scopes: SCOPES,
});

// https://theoephraim.github.io/node-google-spreadsheet/#/?id=working-with-rows
export async function loadCalendarFromSheet(id: string) {
  const doc = new GoogleSpreadsheet(id, serviceAccountAuth);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows<CalendarRow>();

  const objArr = rows.map((row, index) => ({
    Date: row.get('Date'),
    Time: row.get('Time'),
    Event: row.get('Event'),
    Description: row.get('Description'),
  }));

  return filterOutPreviousEvents(sortByDate(objArr));
}
