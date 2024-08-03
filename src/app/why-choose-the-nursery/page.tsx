import { Hero } from '@/components/Hero/Hero';
import styles from './why.module.css';
import { Shadows_Into_Light_Two } from 'next/font/google';
import clsx from 'clsx';

const font = Shadows_Into_Light_Two({ subsets: ['latin'], weight: '400' });
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
          <section>
            <h2 className={font.className}>Our Features</h2>
            <h3>Convenience</h3>
            <ul>
              <li>
                Open year-round: Monday-Friday, 7:30am-5:30pm (except major
                holidays)
              </li>
              <li>Care for children 6 weeks to 3 years old</li>
              <li>Web cameras in each room for parents</li>
              <li>
                Close to South Orange Train Station with free all-day parking
                for parents
              </li>
            </ul>

            <h3>Safety</h3>
            <ul>
              <li>Secure door access with family codes</li>
              <li>Age-appropriate outdoor play area</li>
              <li>CPR and First Aid trained staff</li>
            </ul>

            <h3>Family-Friendly</h3>
            <ul>
              <li>Open door policy</li>
              <li>Lactation room available</li>
              <li>Parent partnership for consistent care</li>
              <li>Family activities</li>
            </ul>

            <h3>Eco-Friendly</h3>
            <ul>
              <li>Non-toxic “green” cleaners</li>
              <li>Air filtration system</li>
              <li>Recycling practices</li>
              <li>Energy Star appliances</li>
            </ul>

            <h3>Quality Care</h3>
            <p>
              We follow ITERS standards and NAEYC guidelines for high-quality
              early childhood education.
            </p>
          </section>

          <section>
            <h2 className={font.className}>Parent Partnership</h2>
            <p>
              We believe in family involvement and shared decision-making. Our
              partnership creates a caring community for families, caregivers,
              and children.
            </p>

            <h3>How We Involve Families</h3>
            <ul>
              <li>Open door policy for visits and calls</li>
              <li>Parent library with helpful resources</li>
              <li>Parenting workshops</li>
              <li>Family events and social gatherings</li>
              <li>Regular communications and updates</li>
              <li>
                Opportunities for parents to share talents and join activities
              </li>
              <li>Annual program survey for feedback</li>
            </ul>

            <h3>Our Partnership Beliefs</h3>
            <ul>
              <li>Parents are experts on their children</li>
              <li>Each child has a Primary Caregiver as their advocate</li>
              <li>
                Continuous exchange of information between parents and staff
              </li>
              <li>
                Success depends on mutual respect, communication, and teamwork
              </li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}
