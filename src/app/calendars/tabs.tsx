'use client';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DATE_FORMAT } from '@/config';
import clsx from 'clsx';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export function Tabs({
  events,
  menu,
}: {
  events: Record<string, string | number>[];
  menu: Record<string, string | number>[];
}) {
  const [activeCal, setActiveCal] = useState<'events' | 'menu'>('events');

  const headers = useMemo(() => {
    if (activeCal === 'events') {
      return Object.keys(events[0] || {}).filter((h) => h !== 'LinkText');
    }
    return Object.keys(menu[0] || {}).filter((h) => h !== 'LinkText');
  }, [activeCal, events, menu]);

  const sheetData = useMemo(() => {
    if (activeCal === 'events') {
      return events;
    }
    return menu;
  }, [activeCal, events, menu]);
  function renderCell(key: string, value: string | number, index: number) {
    if (key === 'Date') {
      return <strong>{dayjs(value).format(DATE_FORMAT)}</strong>;
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
    <section className="max-w-3xl mx-auto">
      <div className="flex space-x-2">
        <Button
          onClick={() => setActiveCal('events')}
          variant={activeCal === 'events' ? 'default' : 'outline'}
        >
          Events
        </Button>
        <Button
          onClick={() => setActiveCal('menu')}
          variant={activeCal === 'menu' ? 'default' : 'outline'}
        >
          Snack Menu
        </Button>
      </div>
      <Table className="mt-8">
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
            <TableRow
              key={rowIndex}
              className={clsx({
                'w-full': true,
                'bg-primary/10': rowIndex % 2 === 0,
                'hover:bg-primary/10': rowIndex % 2 === 0,
                'hover:bg-transparent': rowIndex % 2 !== 0,
              })}
            >
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
  );
}
