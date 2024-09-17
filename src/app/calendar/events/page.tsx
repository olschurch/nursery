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

export default function Events() {
  const data = useCalendarData();

  const events = (data.events ?? []).map((e) => ({
    date: dayjs(e.Date).format('YYYY-MM-DD'),
    title: `${e.Title}`,
  }));

  return (
    <>
      <h1>Nursery Events</h1>
      <div className={styles.desktop}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends
          eventClassNames={styles.event}
          events={events}
        />
      </div>

      <div className={styles.mobile}>
        <FullCalendar
          plugins={[listPlugin]}
          initialView="listMonth"
          weekends
          eventClassNames={styles.event}
          events={events}
        />
      </div>
    </>
  );
}
