import Link from "next/link";
import styles from "./programs.module.css";
import { Hero } from "@/components/Hero/Hero";

export default function Programs() {
  return (
    <main>
      <Hero src="https://olschurch.com/wp-content/uploads//whatshappening-1.jpeg" />
      <article className={styles.article}>
        <div className={styles.links}>
          <Link href="#infants">Infants</Link>
          <Link href="#toddlers">Toddlers</Link>
        </div>
        <section>
          <h2 id="infants">Infants</h2>
          <h3>Six weeks until 18 months</h3>
          <p>
            At The Nursery, we foster a strong partnership with parents,
            providing a nurturing environment for infants aged 6 weeks to 12
            months. Each child receives a personalized care plan, reflecting
            your preferences and routines, with open communication between home
            and The Nursery. Our caregivers engage babies in activities that
            promote physical and cognitive development, including language
            skills through reading and interactive play. We provide individual
            cribs or cots, nutritious snacks, and coordinate feeding routines
            with parents. Daily reports keep you informed about your baby’s day,
            supplemented by regular caregiver conversations, ensuring a safe,
            loving, and enriching environment for your infant to thrive.
          </p>
        </section>

        <section>
          <h2 id="toddlers">Waddlers</h2>
          <h3>19 months until three years </h3>
          <p>
            At The Nursery, we support toddlers as they develop self-help skills
            like feeding themselves, using the toilet, and dressing. Our
            child-sized environment, featuring appropriately sized tables,
            chairs, cubbies, cots, and sinks, removes obstacles to learning
            these skills. Activities focus on manipulating buttons, zippers, and
            snaps, fostering independence through patience and step-by-step
            guidance. The toddler room is rich in materials promoting language
            and motor skills, with alphabet and phonic activities, early math,
            and various art mediums. Large and small motor skills are developed
            through activities like legos, puzzles, scarf play, and outdoor play
            on age-appropriate equipment. Meals are group activities, teaching
            social skills and manners, with snacks provided by The Nursery and
            optional lunches. Naptime follows lunch, with each child provided a
            cot, and quiet time activities available for those who do not sleep.
          </p>
        </section>
      </article>
    </main>
  );
}
