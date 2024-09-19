import { Button } from '@/components/ui/button';
import styles from './page.module.css';

import { Shadows_Into_Light_Two } from 'next/font/google';
import clsx from 'clsx';
import Link from 'next/link';
import { ENROLLMENT_FORM } from '@/config';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Hero } from '@/components/Hero/Hero';

/*
Enrollment & Tuition Schedule

Child Pre-Enrollment Form

You can apply to reserve childcare services for your child by submitting a pre enrollment form. Please download the form from the link at the bottom of the page

Parent Contract and Enrollment Agreement

Please click the OLS Parent contract link below at the bottom of the page to download agreement document. Please review, complete and return the documents with the respective fees and security deposit to:

The Nursery at Our Lady of Sorrows
162 Academy Street, South Orange, NJ 07079

Tuition Fee Schedule (July 2022-June 2023)

Our tuition fee is weekly and is for five full time days.

Infants (6 weeks to 18 months) $461
Toddlers (19 months to 3 years) $436

There is a one time non refundable registration fee of $100 due with application
Late pick up fee is $1 per minute past closing time.
Late payment fee is $25.
Return check fee is $45.
Tuition Fees are adjusted annually on July 1st.
*/

export const metadata = {
  title: 'Tuition & Admissions | Nursery At OLS',
};

export default function Enrollment() {
  return (
    <>
      <Hero
        src="/playground-1.jpg"
        alt="A room inside the nursery"
        objectPosition="center center"
      />
      <main className={styles.enrollment}>
        <article>
          <h1
            className={clsx(
              'font-bold',
              'text-xl',
              'lg:text-3xl',
              'text-primary',
            )}
          >
            Tuition & Admissions
          </h1>

          <h3 className="font-bold text-lg lg:text-xl">
            2024 — 2025 Tuition Schedule
          </h3>
          <p className="text-sm lg:text-base">
            Tuition fee is weekly and is for five full time days.
          </p>
          <Table className="my-4 text-sm lg:text-base">
            <TableHeader>
              <TableRow>
                <TableHead className="text-primary font-bold">Group</TableHead>
                <TableHead className="text-primary font-bold">Age</TableHead>
                <TableHead className="text-primary font-bold">
                  Tuition
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Infants</TableCell>
                <TableCell>6 weeks to 18 months</TableCell>
                <TableCell>$515</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Toddlers</TableCell>
                <TableCell>19 months to 3 years</TableCell>
                <TableCell>$489</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <section className={styles.section}>
            <ul>
              <li>
                There is a one-time registration fee of $250 due with
                application.
              </li>
              <li>Late pick up fee is $1 per minute past closing time.</li>
              <li>Late payment fee is $25.</li>
              <li>Returned check fee is $45.</li>
              <li>Tuition fees are adjusted annually on July 1st</li>
            </ul>
          </section>

          <h3 className="font-bold mt-8 text-lg lg:text-xl">
            Enrollment Steps
          </h3>
          <ol className="pl-5 text-sm lg:text-base">
            <li>
              The first step in obtaining enrollment is{' '}
              <Link
                href={ENROLLMENT_FORM}
                target="_blank"
                className="underline"
              >
                completing an application
              </Link>{' '}
              form, which can be done online. .
            </li>
            <li>
              Once we receive your application, we will reach out to you
              regarding payment of the $250 nonrefundable application fee.
            </li>
          </ol>
        </article>
      </main>
    </>
  );
}
