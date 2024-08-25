'use client';

import dayGridPlugin from '@fullcalendar/daygrid';
import { useCalendarData } from '../CalendarProvider';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { Loader } from '@/components/Loader/Loader';

const FullCalendar = dynamic(() => import('@fullcalendar/react'), {
  loading() {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center ">
        <Loader />
      </div>
    );
  },
  ssr: false,
});

export default function Events() {
  const data = useCalendarData();

  const events = (data.events ?? []).map((e) => ({
    date: dayjs(e.Date).format('YYYY-MM-DD'),
    title: `${e.Title}`,
  }));

  console.log({ events });

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      events={events}
    />
  );
}
