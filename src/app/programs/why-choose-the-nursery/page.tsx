import { Hero } from '@/components/Hero/Hero';

import { Shadows_Into_Light_Two } from 'next/font/google';
import styles from '../programs.module.css';
import Link from 'next/link';

const font = Shadows_Into_Light_Two({ subsets: ['latin'], weight: '400' });
export default function WhyChoose() {
  return (
    <>
      <Hero
        src="/kids-2.jpeg"
        alt="A room inside the nursery"
        objectPosition="center"
        text="Why Choose Us?"
      />
      <main className="p-4">
        <article className={styles.article}>
          <section>
            <h2>Our Features</h2>
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
            <ul>
              <li>
                We follow{' '}
                <Link href="https://ers.fpg.unc.edu/infanttoddler-environment-rating-scale%C2%AE-revised-iters-r%E2%84%A2.html">
                  ITERS standards
                </Link>{' '}
                and{' '}
                <Link href="https://www.naeyc.org/our-work/families/10-naeyc-program-standards">
                  NAEYC guidelines
                </Link>{' '}
                for high-quality early childhood education.
              </li>
            </ul>
          </section>

          <section>
            <h2>Parent Partnership</h2>
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
