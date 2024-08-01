'use client';
import styles from './nav.module.css';

import Link from 'next/link';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
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
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Button } from '../ui/button';

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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function toggleNav() {
    setMobileNavOpen((o) => !o);
  }

  return (
    <nav className={clsx(styles.nav)}>
      <div className={styles.group}>
        <LogoGroup />
      </div>

      <div className={clsx(styles.mobile)}>
        <Drawer>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
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
              <Link href="/calendar">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Calendar
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Dropdown title="Admissions">
                <DropdownMenuLinkItem href="/tuition" text="Tuition" />
                <DropdownMenuLinkItem href="/enrollment" text="Enrollment" />
              </Dropdown>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/enrollment">
                <NavigationMenuLink className="!text-background font-bold py-1.5 px-4 bg-primary rounded-full hover:bg-foreground">
                  Apply Now
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
