import clsx from "clsx";
import Link from "next/link";
import { Logo } from "../icons/logo";
import styles from "./LogoGroup.module.css";

import { Sacramento } from "next/font/google";

const font = Sacramento({ weight: ["400"], subsets: ["latin"] });

export function LogoGroup() {
  return (
    <Link href="/" className="transition-all block">
      <div className={styles["logo-group"]}>
        <Logo />
        <div>
          <h1 className={clsx(styles.h1, font.className)}>The Nursery</h1>
          <h2>At Our Lady Of Sorrows</h2>
        </div>
      </div>
    </Link>
  );
}
