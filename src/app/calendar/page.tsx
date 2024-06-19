import { Hero } from "@/components/Hero/Hero";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getData } from "./utils";
import dayjs from "dayjs";
import clsx from "clsx";

export default async function Calendar() {
  const { keyed: data } = await getData();
  const headers = Object.keys(data[0]);

  return (
    <main>
      <section className="my-8">
        <Table className="max-w-3xl mx-auto text-sm border p-2 bg-white rounded my-16">
          <TableHeader>
            <TableRow>
              {headers.map((cell, i) => (
                <TableHead
                  key={cell}
                  className={clsx("capitalize", {
                    "w-48": cell === "date",
                    "w-72": cell === "description",
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
                className={rowIndex % 2 === 0 ? "bg-blue-50" : ""}
              >
                {headers.map((header, hi) => (
                  <TableCell key={hi}>
                    {header === "date"
                      ? dayjs(row[header]).format("dddd, MMM DD, YYYY")
                      : row[header] || "–"}
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
