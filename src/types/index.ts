const CalendarKeys = [
  'Date',
  'Time',
  'Title',
  'Description',
  'Link',
  'LinkText',
] as const;

export type CalendarRow = {
  [key in (typeof CalendarKeys)[number]]: string;
};
