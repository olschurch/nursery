'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { useCalendarData } from '../CalendarProvider';
import dayjs from 'dayjs';

export default function Events() {
  const data = useCalendarData();

  const events = (data.events ?? []).map((e) => ({
    date: dayjs(e.Date).format('YYYY-MM-DD'),
    title: e.Title,
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
