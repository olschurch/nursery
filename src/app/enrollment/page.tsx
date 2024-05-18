import styles from "./page.module.css";

export default function Enrollment() {
  return (
    <section className={styles.enrollment}>
      <h2>Enrollment & Tuition Schedule</h2>
      <article>
        <h2>Tuition Fee Schedule</h2>
        <p>Our tuition fee is weekly and for five full time days.</p>
        <ul>
          <li>Infants (Six weeks to 18 months) – $461</li>
        </ul>
      </article>
    </section>
  );
}
