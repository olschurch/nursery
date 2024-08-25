import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import styles from '../page.module.css';

export default function Tuition() {
  return (
    <main className={styles.enrollment}>
      <article>
        <h1>2024 — 2025 Tuition Schedule</h1>
        <p>Tuition fee is weekly and is for five full time days.</p>
        <Table className="my-4 text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="text-primary font-bold">Group</TableHead>
              <TableHead className="text-primary font-bold">Age</TableHead>
              <TableHead className="text-primary font-bold">Tuition</TableHead>
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
              There is a one-time registration fee of $250 due with application.
            </li>
            <li>Late pick up fee is $1 per minute past closing time.</li>
            <li>Late payment fee is $25.</li>
            <li>Returned check fee is $45.</li>
            <li>Tuition fees are adjusted annually on July 1st</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
