import styles from '../programs.module.css';
import { Hero } from '@/components/Hero/Hero';

export default function Infants() {
  return (
    <>
      <Hero
        src="/room_3.jpg"
        alt="A room inside the nursery"
        objectPosition="bottom left"
        text="
        Infant Room"
      />
      <article className={styles.article}>
        <section>
          <p>
            The Nursery wants to be partners with you the parent. You are
            trusting us with your baby and we want to earn that trust. Our
            infant program provides a loving and nurturing environment for
            <br /> <strong>6-week to 12-month-old children</strong>. This
            full-time program allows staff to help children develop a sense of
            security with their environment.
          </p>
          <p>
            In the Infant room each child has an Individual Plan. We believe
            that you as parents should be the people making the decisions about
            your baby’s day at The Nursery. Whether your baby eats or sleeps on
            a schedule or on demand, we will support your decision and follow
            your directives. Teamwork between home and the infant room is
            vitally important. The needs of infants are ever changing, which
            means communication among adults is essential to support each
            child’s care and education.
          </p>
          <p>
            From birth, babies are learning at an amazing rate. They are
            investigating sights, sounds, and textures. At The Nursery we
            provide a rich environment full of opportunities to actively explore
            and master their world. They are surrounded with attentive
            caregivers who respond to their needs, fill their day with
            responsive interactions and language, and give each baby the
            nurturing so important to develop a sense of trust. Our infants are
            read to, held, played with, challenged and loved throughout their
            day. Reaching, grasping, kicking, holding, pulling, creeping,
            crawling are all encouraged with the younger infants. Older infants
            work on walking, feeding, gripping, throwing, climbing, pushing and
            pulling. All babies explore texture, color, patterns, size, shape,
            taste and weight. Cognitively they learn object permanence, spatial
            relationships, cause and effect and problem solving. Through
            adult-child conversations, reading, fingerplays, songs and music the
            infants are immersed in a language rich environment. Infants explore
            art, movement, pretend play and role playing.
          </p>
          <p>
            Each infant is provided with their own crib or cot depending on
            their age and readiness. At feeding time, the younger babies are
            always held when having a bottle. When they are ready for solid food
            we have small, individual high chairs to encourage self-feeding
            skills. When parents decide that their child is ready for finger
            food, The Nursery provides nutritious snacks and food is sent in
            from home to assure continuity of feeding and food choices.
          </p>
          <p>
            We provide gentle care to meet the daily needs of diapering,
            feeding, and sleeping. By earnestly working to meet the infant’s
            basic needs, we create a healthy and safe environment. We believe
            diaper time is a time for wonderful interactions with the infant.
            The caregivers view this as a special one on one time when they can
            spend time talking with the babies and further developing a sense of
            trust. Each family provides the diapers, wipes and ointments that
            they wish to be used. Every infant is changed at least every two
            hours or more often if needed.
          </p>
          <p>
            Although you are away from your child during the day, you will know
            what their day was like through the daily report you will receive at
            the end of each day. This report lets you know about diaper changes,
            feeding, naps and notes about what your baby did while at The
            Nursery. The daily report supplements the conversations you will
            have with the caregivers each day. Our caregivers try to always be
            available either at drop off or pick up times and can be called
            anytime during the day.
          </p>
        </section>
      </article>
    </>
  );
}
