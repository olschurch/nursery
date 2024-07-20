import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getData } from './utils';
import dayjs from 'dayjs';
import clsx from 'clsx';
import { loadSheet } from '@/lib/gsheet';

export default async function Calendar() {
  const { keyed: data } = await getData();
  const sheetData = await loadSheet(
    '1Gi_muV6F5TqTYGJRlpbWc8UfsTaG94FeCV24dmFLq88',
  );
  console.log({ sheetData });
  const headers = Object.keys(data[0]);

  return (
    <main className="p-4">
      <section className="my-8">
        <h1 className="text-primary font-bold text-3xl max-w-3xl mx-auto">
          Nursery Calendar
        </h1>
        <Table className="max-w-3xl mx-auto text-sm border p-2 bg-white rounded my-4">
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
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className={rowIndex % 2 === 0 ? 'bg-primary/5' : ''}
              >
                {headers.map((header, hi) => (
                  <TableCell key={hi}>
                    {header === 'date'
                      ? dayjs(row[header]).format('dddd, MMM DD, YYYY')
                      : row[header] || '–'}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
