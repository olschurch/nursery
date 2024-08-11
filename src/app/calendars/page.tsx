import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import dayjs from 'dayjs';
import clsx from 'clsx';
import { Hero } from '@/components/Hero/Hero';
import Link from 'next/link';
import { loadCalendarFromSheet } from '@/lib/google';
import { Tabs } from './tabs';

// Revalidate page every 10 mins
export const revalidate = 600;

export default async function Calendar() {
  const result = await loadCalendarFromSheet(process.env.GOOGLE_SHEET_ID!);

  let events: Record<string, string | number>[] | undefined | null =
    result?.events;
  let menu: Record<string, string | number>[] | undefined | null = result?.menu;

  return (
    <>
      <Hero
        objectPosition="center"
        text="Nursery Calendar"
        src="/kids-2.jpeg"
      />
      <section className="my-8 px-4 text-lg">
        <Tabs events={events ?? []} menu={menu ?? []} />
      </section>
    </>
  );
}
