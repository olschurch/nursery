'use client';

import { createContext, ReactNode, useContext } from 'react';

export const CalendarDataContext = createContext<{
  events: Record<string, string | number>[] | null;
  menu: Record<string, string | number>[] | null;
}>({ events: null, menu: null });

export function useCalendarData() {
  return useContext(CalendarDataContext);
}

export function CalendarDataProvider({
  children,
  data,
}: {
  children: ReactNode;
  data: any;
}) {
  return (
    <CalendarDataContext.Provider value={data}>
      {children}
    </CalendarDataContext.Provider>
  );
}
