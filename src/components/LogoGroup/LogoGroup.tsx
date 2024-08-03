import clsx from 'clsx';
import Link from 'next/link';
import { Logo } from '../icons/logo';
import styles from './LogoGroup.module.css';

import { Sacramento } from 'next/font/google';

const font = Sacramento({ weight: ['400'], subsets: ['latin'] });

export function LogoGroup({ variant }: { variant?: 'in-footer' }) {
  return (
    <Link
      href="/"
      className={clsx(styles['logo-group-container'], 'logo-group', {
        [styles['in-footer']]: variant === 'in-footer',
      })}
    >
      <div className={styles['logo-group']}>
        <Logo />
        <div className={styles['logo-group-text']}>
          <h1 className={clsx(styles.h1, font.className)}>The Nursery</h1>
          <h2>Our Lady Of Sorrows</h2>
        </div>
      </div>
    </Link>
  );
}
