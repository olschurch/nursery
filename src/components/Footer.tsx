import Link from 'next/link';
import styles from './footer.module.css';
import { ADDRESS_LINK } from '@/config';
import { LogoGroup } from './LogoGroup/LogoGroup';
import clsx from 'clsx';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <LogoGroup variant="in-footer" />

      <div className={clsx(styles.group, styles.hours)}>
        <h2>Hours</h2>
        <p>Monday–Friday</p>
        <p>7:30am–5:30pm</p>
      </div>
      <hr className={styles.hr} />
      <address>
        <Link href={ADDRESS_LINK} target="_blank">
          162 Academy Street, South Orange, NJ 07079
        </Link>
      </address>
      <div className={styles.email}>
        <Link href="mailto:director@olsnursery.com">
          director@olsnursery.com
        </Link>
      </div>
      <div className={styles.tel}>
        <Link href="tel:973-763-4040">973.763.4040</Link>
      </div>
    </footer>
  );
}
