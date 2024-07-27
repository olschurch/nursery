const CalendarKeys = ['Date', 'Time', 'Event', 'Description', 'Link'] as const;

export type CalendarRow = {
  [key in (typeof CalendarKeys)[number]]: string;
};
