/* eslint-disable @next/next/no-img-element */
import { Hero } from '@/components/Hero/Hero';
import styles from './index.module.css';
import { Sacramento } from 'next/font/google';
const font = Sacramento({ weight: ['400'], subsets: ['latin'] });

export const metadata = {
  title: 'The Nursery At Our Lady Of Sorrows',
  description:
    'The Nursery of Our Lady of Sorrows in South Orange, NJ, provides year round child care for children 6 weeks to 3 years of age - with secure, parental webcam.',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero
        src="/k-2.jpg"
        alt="A room inside the nursery"
        text="Welcome to The Nursery"
        objectPosition="100% 50%"
        flip
      />
      <section className={styles.section}>
        <p>
          The Nursery at Our Lady of Sorrows School is conveniently located at
          in the lovely village of South Orange, New Jersey.
        </p>
        <p>
          The beautiful and completely renovated convent building of Our Lady of
          Sorrows Church houses this nursery which provides year round
          affordable and loving child care for children from six-weeks to
          three-years of age.
        </p>
      </section>
    </main>
  );
}
