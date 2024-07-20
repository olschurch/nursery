const CalendarKeys = ['Date', 'Time', 'Event', 'Description'] as const;

export type CalendarRow = {
  [key in (typeof CalendarKeys)[number]]: string;
};
