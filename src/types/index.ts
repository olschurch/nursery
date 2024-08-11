const CalendarKeys = [
  'Date',
  'Time',
  'Title',
  'Description',
  'Link',
  'LinkText',
] as const;

const MenuKeys = ['Date', 'AM', 'PM'] as const;

export type CalendarRow = {
  [key in (typeof CalendarKeys)[number]]: string;
};

export type MenuRow = {
  [key in (typeof MenuKeys)[number]]: string;
};
