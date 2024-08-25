import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterOutPreviousEntries(
  data: Record<string, string | number>[],
  opts?: Partial<{
    filterBeforeBeginningOfMonth: boolean;
  }>,
) {
  const currentDay = dayjs();
  const currentMonth = dayjs().startOf('month');
  let x: dayjs.Dayjs = currentDay;

  if (opts?.filterBeforeBeginningOfMonth) {
    x = currentMonth;
  }

  return data.filter((d) => {
    if (dayjs(d.Date).isBefore(x)) {
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
