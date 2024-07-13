import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import styles from "./tuition.module.css";

export default function Tuition() {
  return (
    <main className="p-4">
      <article className="max-w-xl mx-auto my-8">
        <h1 className="text-xl text-primary font-bold">
          2024-2025 Tuition Schedule
        </h1>
        <p>Our tuition fee is weekly and is for five full time days.</p>
        <Table className="my-4">
          <TableHeader>
            <TableRow>
              <TableHead>Group</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Tuition</TableHead>
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
          <p>
            There is a one-time registration fee of $250 due with application.
          </p>
          <p>Late pick up fee is $1 per minute past closing time.</p>
          <p>Late payment fee is $25. Return check fee is $45.</p>
          <p>Tuition fees are adjusted annually on July 1st</p>.
        </section>
      </article>
    </main>
  );
}
