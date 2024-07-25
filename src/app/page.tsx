/* eslint-disable @next/next/no-img-element */
import { Hero } from '@/components/Hero/Hero';
import styles from './index.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero
        src="/room_1.jpg"
        alt="A room inside the nursery"
        text="Welcome to The Nursery"
      />
      <section className={styles.section}>
        <p>
          The Nursery at Our Lady of Sorrows School is conveniently located at
          in the lovely village of South Orange, New Jersey. The beautiful and
          completely renovated convent building of Our Lady of Sorrows Church
          houses this nursery which provides year round affordable and loving
          child care for children 6 weeks to 3 years of age.
        </p>
        <p>
          Our secure, password-protected, state-of-the-art parental webcam
          service allows parents to observe their own children via the web
          during the day or review the archived recordings at any other time.
        </p>
        <p>We also offer free commuter parking to parents.</p>
      </section>
    </main>
  );
}
