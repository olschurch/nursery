import Link from "next/link";
import styles from "./footer.module.css";
import { ADDRESS_LINK } from "@/config";

export function Footer() {
  return (
    <footer className={styles.footer}>
      The Nursery at Our Lady of Sorrows School
      <address>
        <Link href={ADDRESS_LINK} target="_blank">
          162 Academy Street, South Orange, NJ 07079
        </Link>
      </address>
    </footer>
  );
}
