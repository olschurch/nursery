'use client';

import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { useCalendarData } from '../CalendarProvider';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { Loader } from '@/components/Loader/Loader';
import styles from '../calendar.module.css';

const FullCalendar = dynamic(() => import('@fullcalendar/react'), {
  loading() {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center ">
        <Loader />
      </div>
    );
  },
});

export const metadata = {
  title: 'Snack Menu | Nursery At OLS',
};

export default function Events() {
  const data = useCalendarData();

  const menu = (data.menu ?? []).map((e) => ({
    date: dayjs(e.date).format('YYYY-MM-DD'),
    title: `${e.text}`,
  }));

  return (
    <>
      <h1>Snack Menu</h1>
      <div className={styles.desktop}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={menu}
          eventClassNames={styles.event}
        />
      </div>
      <div className={styles.mobile}>
        <FullCalendar
          plugins={[listPlugin]}
          initialView="listWeek"
          eventClassNames={styles['mobile-event']}
          weekends={false}
          events={menu}
        />
      </div>
    </>
  );
}
