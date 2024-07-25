import { Button } from '@/components/ui/button';
import styles from './page.module.css';

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
    <main className="p-4">
      <article className="max-w-xl mx-auto my-8">
        <h1 className="text-3xl text-primary font-bold">Enrollment Process</h1>
        <p>
          The first step in obtaining enrollment is completing an application
          form, which can be done online.
        </p>
        <div className="my-2">
          <Button>Enroll Now</Button>
        </div>
        <p className="my-8">
          <small className="italic leading-2 block">
            Once we receive your application, we will reach out to you regarding
            payment of the $100 nonrefundable application fee. TK
          </small>
        </p>
      </article>
    </main>
  );
}
