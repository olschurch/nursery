import styles from '../programs.module.css';
import { Hero } from '@/components/Hero/Hero';

export default function Infants() {
  return (
    <>
      <Hero
        src="/room_3.jpg"
        alt="A room inside the nursery"
        objectPosition="bottom left"
        text="Toddler Room"
      />
      <article className={styles.article}>
        <section>
          <p>
            Toddlers are beginning to control their world. They are asking the
            adults in their world to “help them do it all by myself”. During
            this wonderful time they are developing many self help skills
            including feeding themselves, using the toilet, dressing themselves,
            drinking from a cup, etc.. Our toddler sized environment removes
            many of the obstacles to learning these skills. At The Nursery our
            tables and chair, cubbies, cots and shelves are designed for
            toddlers. Our toilets and sinks are child sized, not adult sized
            with stools. Many of our learning activities focus on skills needed
            to manipulate buttons, zippers and snaps. Our toddlers are
            encouraged to try to put on their own coats, shoes, socks and
            clothing. We believe that through patience and breaking tasks into
            small steps most toddlers can learn appropriate independence. . A
            consistent program of developmentally appropriate activities helps
            to nurture a positive “can-do” attitude
          </p>
          <p>
            The toddler room is full of materials that promote further language
            development. There are alphabet and phonic activities, early math
            materials. The toddlers experience art through many mediums
            including crayons, markers, paint, finger-paint, clay, etc. Our art
            activities are child directed allowing the child to develop actual
            skills and experience art mediums on their own as opposed to
            learning to copy an adult made prototype.
          </p>
          <p>
            Small and large motor skills are improved and refined throughout the
            program. Many manipulatives such as large legos, link-its, and
            puzzles are always available for the toddlers to chose. Movement
            activities take place through scarf play, circle time, balls and
            fingerplays, all of which help develop the child’s large motor
            skills. Our playground is equipped with age-appropriate equipment
            allowing the toddlers to climb, jump, slide, run and ride. Weather
            permitting the toddlers go outside at least twice each day.
          </p>
          <p>
            In the toddler room, snacks and lunch are served as a group
            activity. Each day there will be a morning and afternoon snack,
            provided by The Nursery. The children will bring their own lunch.
            Snack and lunch times are special opportunities for the toddlers to
            learn social skills and manners. The children learn to set the
            tables, sit nicely and clean up when they are done eating.
          </p>
          <p>
            Naptime is in the early afternoon shortly after lunch. Each child is
            provided a toddler-sized cot. Families are encouraged to send in a
            blanket and small pillow if desired. The teachers turn off the
            lights and play quiet music to help the children rest. The teachers
            are happy to rub backs to help the toddlers to fall asleep. No child
            is forced to sleep. After resting on their cot for thirty minutes, a
            child who does not sleep is allowed to choose a quiet activity until
            naptime is over.
          </p>
        </section>
      </article>
    </>
  );
}
