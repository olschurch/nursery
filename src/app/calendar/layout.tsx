import { ReactNode } from 'react';

import styles from './calendar.module.css';
import { loadCalendarFromSheet } from '@/lib/google';
import { CalendarDataProvider } from './CalendarProvider';

export const metadata = {
  title: 'Calendar | Nursery At OLS',
};

export default async function CalendarLayout({
  children,
}: {
  children: ReactNode;
}) {
  const result = await loadCalendarFromSheet(process.env.GOOGLE_SHEET_ID!);

  let events: Record<string, string | number>[] | undefined | null =
    result?.events;
  let menu: Record<string, string | number>[] | undefined | null = result?.menu;

  return (
    <CalendarDataProvider data={{ events, menu }}>
      <section className={styles.wrapper}>{children}</section>
    </CalendarDataProvider>
  );
}
