import Link from 'next/link';
import styles from './footer.module.css';
import { ADDRESS_LINK } from '@/config';
import { LogoGroup } from './LogoGroup/LogoGroup';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <LogoGroup variant="in-footer" />
      <address>
        <Link href={ADDRESS_LINK} target="_blank">
          162 Academy Street, South Orange, NJ 07079
        </Link>
      </address>
      <div className={styles.tel}>
        <Link href="tel:973-763-4040">973.763.4040</Link>
      </div>
      <div className={styles.group}>
        <h2>Hours</h2>
        <p>Monday–Friday</p>
        <p>7:30am–5:30pm</p>
      </div>
    </footer>
  );
}
