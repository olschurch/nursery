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

// Revalidate page every 10 mins
export const revalidate = 600;

export default async function Calendar() {
  const sheetData = await loadCalendarFromSheet(process.env.GOOGLE_SHEET_ID!);

  const headers = Object.keys(sheetData[0] || {}).filter(
    (h) => h !== 'LinkText',
  );

  function renderCell(key: string, value: string | number, index: number) {
    if (key === 'Date') {
      return dayjs(value).format('ddd, MMM DD, YYYY');
    }
    if (key === 'Link' && value) {
      return (
        <Link href={value as string} className="underline">
          More Info
        </Link>
      );
    }

    return value;
  }

  return (
    <>
      <Hero objectPosition="bottom left" text="Nursery Calendar" />
      <section className="my-8 px-4 text-lg">
        <Table className="max-w-3xl mx-auto">
          <TableHeader>
            <TableRow>
              {headers.map((cell, i) => (
                <TableHead
                  key={cell}
                  className={clsx('capitalize', {
                    'w-48': cell === 'date',
                    'w-72': cell === 'description',
                  })}
                >
                  {cell}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sheetData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {Object.entries(row).map(([key, val], i) => (
                  <TableCell key={i} className="">
                    {renderCell(key, val, i)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
}
