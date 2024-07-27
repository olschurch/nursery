'use client';
import styles from './nav.module.css';

import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import clsx from 'clsx';
import { LogoGroup } from '../LogoGroup/LogoGroup';
import { Dropdown, DropdownMenuLinkItem } from '../Dropdown/Dropdown';

const programs: { title: string; href: string; description: string }[] = [
  {
    title: 'Infants',
    href: '/programs/infants',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Toddlers',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
];

export function Nav({ className }: { className: string }) {
  return (
    <nav className={clsx(styles.nav)}>
      <div className={styles.group}>
        <LogoGroup />
      </div>
      <div className={clsx(styles.group, styles.desktop)}>
        <NavigationMenu className={styles.menu}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Dropdown title="About">
                <DropdownMenuLinkItem
                  href="/why-choose-the-nursery"
                  text="Why Choose The Nursery?"
                />

                <DropdownMenuLinkItem href="/calendar" text="Calendar" />
                <DropdownMenuLinkItem href="/news" text="News" />
                <DropdownMenuLinkItem href="/tuition" text="Tuition" />
              </Dropdown>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Dropdown title="Programs">
                <DropdownMenuLinkItem href="/programs/infants" text="Infants" />
                <DropdownMenuLinkItem
                  href="/programs/toddlers"
                  text="Toddlers"
                />
                <DropdownMenuLinkItem
                  href="/programs/daily-schedule"
                  text="Daily Schedule"
                />
              </Dropdown>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <div className={styles.action}>
                <Dropdown title="Admissions">
                  <DropdownMenuLinkItem href="/tuition" text="Tuition" />
                  <DropdownMenuLinkItem href="/enrollment" text="Enrollment" />
                </Dropdown>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
