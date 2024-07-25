import { Hero } from '@/components/Hero/Hero';
import styles from './why.module.css';
export default function WhyChoose() {
  return (
    <>
      <Hero
        src="/room_4.jpg"
        alt="A room inside the nursery"
        objectPosition="center"
        text="Why Choose Us?"
      />
      <main className="p-4">
        <article className={styles.article}>
          <ul>
            <span>Convenience</span>
            <li>
              Open all year, except for the major holidays{' '}
              <time className="font-bold">
                Monday thru Friday, 7:30am-5:30pm
              </time>
              .
            </li>
            <li>
              Caring for children 6 weeks to 3 years old. Together with Our Lady
              of Sorrows School preschool and elementary school, our campus
              cares for and educates children from the Nursery through Grade 8.
            </li>
            <li>
              Web cameras in each room: you can follow your child&#39;s day on
              our password-protected website
            </li>
            <li>Walking distance to South Orange Train Station</li>
            <li>
              Free all-day parking available to commuter parents on a
              first-come, first-served basis{' '}
            </li>
          </ul>
          <ul>
            <span>Safety</span>
            <li>Secure door access through individual family codes</li>
            <li>Age appropriate outdoor play yard </li>
            <li>All staff trained in CPR and First Aid</li>
          </ul>
          <ul>
            <span>Family Friendly</span>
            <li>Open door policy</li>
            <li>Lactation Room</li>
            <li>
              Parent Partnership Policy: we work with families for consistent
              care
            </li>
            <li>Family Fun Activities</li>
          </ul>
          <ul>
            <span>Earth Friendly</span>
            <li>Only “green” non-toxic cleaners</li>
            <li>Air filtration insures good air quality</li>
            <li>We recycle grocery bags for diaper disposal</li>
            <li>Only Energy Star appliances and machines</li>
          </ul>
          <ul>
            <span>Quality Care</span>
            <li>
              We follow the Infant Toddler Environment Rating Scale (ITERS)
              standards and use the National Association for the Education of
              Young Children (NAEYC) standards as our guidelines. The Nursery at
              Our Lady of Sorrows - a new fashioned center with old fashioned
              values
            </li>
          </ul>
        </article>
      </main>
    </>
  );
}
