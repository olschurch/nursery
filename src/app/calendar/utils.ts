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

export function filterOutPreviousEvents(
  data: Record<string, string | number>[],
) {
  const now = dayjs();

  return data.filter((d) => {
    if (dayjs(d.Date).isBefore(now)) {
      return false;
    }
    return true;
  });
}

export function sortByDate(data: Record<string, string | number>[]) {
  return data.sort((a, b) => {
    if (!a.Date || !b.Date) return 0;
    let ad = dayjs(a.Date).valueOf();
    const bd = dayjs(b.Date).valueOf();
    if (ad < bd) return -1;
    return 1;
  });
}
