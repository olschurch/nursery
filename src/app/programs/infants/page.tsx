import styles from '../programs.module.css';
import { Hero } from '@/components/Hero/Hero';

export default function Infants() {
  return (
    <>
      <Hero
        src="/cribs.jpg"
        alt="A room inside the nursery"
        objectPosition="center center"
        text="
        Infants"
      />
      <article className={styles.article}>
        <section>
          <p>
            Our full-time infant program provides a nurturing environment for
            children aged 6 weeks to 12 months, fostering security and
            development.
          </p>

          <h2>Individualized Care</h2>
          <ul>
            <li>Each child has an Individual Plan</li>
            <li>Parents guide decisions about feeding and sleep schedules</li>
            <li>
              Strong communication between staff and parents ensures optimal
              care
            </li>
          </ul>

          <h2>Learning Environment</h2>
          <ul>
            <li>Rich, stimulating surroundings encourage exploration</li>
            <li>
              Attentive caregivers support physical, cognitive, and emotional
              development
            </li>
            <li>
              Activities promote motor skills, sensory exploration, and early
              cognitive concepts
            </li>
          </ul>

          <h2>Daily Care</h2>
          <ul>
            <li>Age-appropriate sleeping arrangements (cribs or cots)</li>
            <li>
              Supervised feeding, transitioning from bottles to solid foods as
              appropriate
            </li>
            <li>
              Regular diaper changes with personal care products provided by
              parents
            </li>
          </ul>

          <h2>Communication</h2>
          <ul>
            <li>
              Daily reports detail feeding, naps, diaper changes, and activities
            </li>
            <li>
              Staff available for discussions during drop-off, pick-up, or
              throughout the day
            </li>
          </ul>

          <p>
            Our program emphasizes individualized care, developmental support,
            and open communication to provide a secure and enriching experience
            for infants and peace of mind for parents.
          </p>
        </section>
      </article>
    </>
  );
}
