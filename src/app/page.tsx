/* eslint-disable @next/next/no-img-element */
import { Hero } from "@/components/Hero/Hero";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero src="https://images.squarespace-cdn.com/content/v1/5d38c664faa31100010b218d/1564182950212-14OW7J85NOTO9KSVEZ0I/IMG_8900a.jpg?format=2500w" />
      <section className={styles.section}>
        <p>
          The Nursery at Our Lady of Sorrows School is conveniently located at
          in the lovely village of South Orange, New Jersey. The beautiful and
          completely renovated convent building of Our Lady of Sorrows Church
          houses this nursery which provides year round affordable and loving
          child care for children 6 weeks to 3 years of age. Our secure,
          password-protected, state-of-the-art parental webcam service allows
          parents to observe their own children via the web during the day or
          review the archived recordings at any other time. We also offer free
          commuter parking to parents.
        </p>
      </section>
    </main>
  );
}
