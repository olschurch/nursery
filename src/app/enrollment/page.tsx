import { Button } from '@/components/ui/button';
import styles from './page.module.css';

import { Shadows_Into_Light_Two } from 'next/font/google';
import clsx from 'clsx';
import Link from 'next/link';
import { ENROLLMENT_FORM } from '@/config';

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

export default function Enrollment() {
  return (
    <main className={styles.enrollment}>
      <article>
        <h1 className={clsx('font-bold', 'text-3xl', 'text-primary')}>
          Enrollment Process
        </h1>

        <ol>
          <li>
            The first step in obtaining enrollment is{' '}
            <Link href={ENROLLMENT_FORM} target="_blank" className="underline">
              completing an application
            </Link>
            form, which can be done online. Additionally, please see our{' '}
            <Link href="/tuition" className="underline">
              current tuition schedule
            </Link>
            .
          </li>
          <li>
            Once we receive your application, we will reach out to you regarding
            payment of the $250 nonrefundable application fee.
          </li>
        </ol>
      </article>
    </main>
  );
}
