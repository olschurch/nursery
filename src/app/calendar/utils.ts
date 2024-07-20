import { parse } from 'csv-parse';
import dayjs, { Dayjs } from 'dayjs';
export function parsePromise(str: string): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    parse(str, (err, records) => {
      if (err) {
        reject(err);
      }
      resolve(records);
    });
  });
}
// example parse data
/**
 [
    [ 'Date', 'Time', 'Day', 'Event', 'Description' ],
    [
      '6/24/2024',
      '',
      'Monday',
      'Test Case',
      'Here is a dummy description.'
    ],
    [
      '7/4/2024',
      '7:00 PM',
      '',
      'Fourth Of July Party',
      'With more dummy demo data.'
    ]
  ],
 */

export function csvRowsToJson(data: string[][]) {
  const [header, ...rows] = data;
  return rows.map((row) => {
    const obj: Record<string, string | number> = {};
    header.forEach((key, index) => {
      const hKey = key.toLowerCase().trim();
      let value = (row[index] || '').trim();
      if (hKey === 'date') {
        const d = dayjs(value);
        value = d.toISOString();
      }
      obj[hKey] = value;
    });

    return obj;
  });
}

export function sortByDate(data: Record<string, string | number>[]) {
  return data.sort((a, b) => {
    if (!a.date || !b.date) {
      return 0;
    }
    let ad = dayjs(a.date).valueOf();
    const bd = dayjs(b.date).valueOf();
    if (ad < bd) {
      return -1;
    }
    return 1;
  });
}

export async function getData() {
  if (!process.env.SHEETS_URL) {
    throw new Error('No sheets url in env');
  }

  const res = await fetch(process.env.SHEETS_URL);
  const str = await res.text();
  const rows = await parsePromise(str);
  const data = sortByDate(csvRowsToJson(rows));
  return {
    tabular: rows,
    keyed: data,
  };
}
