import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <article>{children}</article>
    </main>
  );
}
