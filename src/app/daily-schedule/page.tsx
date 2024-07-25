import { Hero } from '@/components/Hero/Hero';
import styles from './daily.module.css';

export default function Philosophy() {
  return (
    <main>
      <Hero objectPosition="bottom left" text="Daily Schedule" />

      <article className={styles.article}>
        <section>
          <p>
            A daily schedule maximizes children’s learning though effective use
            of time, materials used for play, self-initiated learning, and
            creative expression.  It also offers opportunities for children to
            learn individually and in groups according to their developmental
            needs and interests. We plan for all areas of development:
            cognitive, language, physical (large and small muscle) and
            social/emotional. The daily schedule shall include these elements: 
            Self-directed play and exploration  Story time  Music and movement
             Outdoor time  Nap time  Snack and mealtimes  Group time (both
            large and small group)  Diaper changes, hand-washing, and bathroom
            General Principles considered for planning the schedule:  Each
            child and each group of children is different so there is no one
            “right” schedule  Our carefully planned schedules will: 1. Be
            predictable - routines provide security and comfort for younger
            children as they grow out of infancy 2. Be flexible - not rigid 3.
            Include a variety of activities in some form every day  Variety of
            toys/activities that focus on development of small and large muscles
             Art, books, music and singing, simple problem solving, cause and
            effect, and social experiences  Opportunities for visual, auditory,
            and sensory stimulation 4. Have a balance between activities that
            are:  Active vs. calm  Individual vs. group  Child-initiated vs.
            teacher-directed  Indoor vs. outdoor
          </p>
        </section>
      </article>
    </main>
  );
}
