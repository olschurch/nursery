import { Hero } from '@/components/Hero/Hero';
import styles from '../programs.module.css';

export const metadata = {
  title: 'Daily Schedule | Nursery At OLS',
};

export default function Philosophy() {
  return (
    <main>
      <Hero
        src="/k-6.jpg"
        alt="A room inside the nursery"
        objectPosition="center"
        text="Daily Schedule"
      />
      <article className={styles.article}>
        <section>
          <p>
            A daily schedule maximizes children’s learning though effective use
            of time, materials used for play, self-initiated learning, and
            creative expression.  It also offers opportunities for children to
            learn individually and in groups according to their developmental
            needs and interests. We plan for all areas of development:
            cognitive, language, physical (large and small muscle) and
            social/emotional.
          </p>

          <p>The daily schedule shall include these elements</p>
          <ul>
            <li>Self-directed play and exploration</li>
            <li>Story time</li>
            <li>Music and movement</li>
            <li>Outdoor time</li>
            <li>Nap time</li>
            <li>Snack and mealtimes</li>
            <li>Group time (both large and small group)</li>
            <li>Diaper changes, hand-washing, and bathroom</li>
          </ul>

          <h2>General Principles</h2>

          <p>
            Each child and each group of children is different so there is no
            one “right” schedule
          </p>
          <p>
            <strong>Our carefully planned schedules will:</strong>
          </p>
          <ul>
            <li>
              Be predictable - routines provide security and comfort for younger
              children as they grow out of infancy
            </li>
            <li>Be flexible - not rigid</li>
            <li>
              Include a variety of activities in some form every day  Variety
              of toys/activities that focus on development of small and large
              muscles
              <ul>
                <li>
                  Art, books, music and singing, simple problem solving, cause
                  and effect, and social experiences
                </li>
                <li>
                  Opportunities for visual, auditory, and sensory stimulation
                </li>
              </ul>
            </li>
            <li>
              Have a balance between activities that are:
              <ul>
                <li>Active vs. calm</li>
                <li>Individual vs. group</li>
                <li>Child-initiated vs. teacher-directed</li>
                <li>Indoor vs. outdoor</li>
              </ul>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
