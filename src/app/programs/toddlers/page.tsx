import styles from '../programs.module.css';
import { Hero } from '@/components/Hero/Hero';

export const metadata = {
  title: 'Toddlers | Nursery At OLS',
};

export default function Infants() {
  return (
    <>
      <Hero
        src="/k-4.jpg"
        alt="A room inside the nursery"
        objectPosition="50% 20%"
        text="Toddler Room"
      />
      <article className={styles.article}>
        <section>
          <p>
            Our toddler program provides a stimulating and supportive
            environment for young children as they develop independence and
            explore their world.
          </p>

          <h2>Our Approach</h2>
          <p>
            We focus on developmentally appropriate activities, fostering
            independence, and creating a positive learning environment tailored
            to toddlers’ needs.
          </p>

          <h2>Self-Help Skills Development</h2>
          <p>
            Our toddler-sized environment promotes independence in daily tasks
            such as feeding, toilet use, and dressing. We encourage a “can-do”
            attitude through patience and step-by-step learning.
          </p>

          <h2>Learning Activities</h2>
          <ul>
            <li>Language development: Alphabet and phonics activities</li>
            <li>Early math materials</li>
            <li>
              Child-directed art experiences: Various mediums including crayons,
              paint, and clay
            </li>
            <li>
              Motor skills development: Manipulatives, movement activities, and
              outdoor play
            </li>
          </ul>

          <h2>Meals and Snacks</h2>
          <p>
            Group meals promote social skills and manners. The Nursery provides
            morning and afternoon snacks; children bring their own lunch.
          </p>

          <h2>Naptime</h2>
          <p>
            Early afternoon nap on toddler-sized cots. Quiet activities
            available for non-sleepers after a 30-minute rest period.
          </p>

          <h2>Outdoor Activities</h2>
          <p>
            Weather permitting, toddlers enjoy outdoor playtime twice daily on
            age-appropriate equipment.
          </p>
        </section>
      </article>
    </>
  );
}
