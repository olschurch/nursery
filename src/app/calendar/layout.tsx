import { ReactNode } from 'react';

import styles from './calendar.module.css';
import { loadCalendarFromSheet } from '@/lib/google';
import { CalendarDataProvider } from './CalendarProvider';
export default async function CalendarLayout({
  children,
}: {
  children: ReactNode;
}) {
  const result = await loadCalendarFromSheet(process.env.GOOGLE_SHEET_ID!);

  let events: Record<string, string | number>[] | undefined | null =
    result?.events;
  let menu: Record<string, string | number>[] | undefined | null = result?.menu;

  console.log({ result });
  return (
    <CalendarDataProvider data={{ events, menu }}>
      <section className={styles.wrapper}>{children}</section>
    </CalendarDataProvider>
  );
}
