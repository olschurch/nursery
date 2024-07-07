import { ReactNode, useId } from "react";
import styles from "./dropdown.module.css";
import Link from "next/link";
import { Button } from "../ui/button";

export function DropdownMenuLinkItem({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <li>
      <Link href={href}>{text}</Link>
    </li>
  );
}

export function Dropdown({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      <Button
        type="button"
        variant="ghost"
        className={styles.trigger}
        aria-expanded="false"
        aria-controls={id}
      >
        {title}
      </Button>
      <ul className={styles.menu} id={id}>
        {children}
      </ul>
    </div>
  );
}
