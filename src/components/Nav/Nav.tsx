'use client';
import styles from './nav.module.css';

import Link from 'next/link';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
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
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { Shadows_Into_Light_Two } from 'next/font/google';

const font = Shadows_Into_Light_Two({ subsets: ['latin'], weight: '400' });

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

  const pathname = usePathname();

  function handleOpenChange(val: any) {
    console.log({ val });
    setMobileNavOpen(val);
  }

  // close any drawer on route change
  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  return (
    <nav className={clsx(styles.nav)}>
      <div className={styles.group}>
        <LogoGroup />
      </div>

      <div className={clsx(styles.mobile)}>
        <Drawer open={mobileNavOpen} onOpenChange={handleOpenChange}>
          <DrawerTrigger className="absolute top-1/3 right-4 text-primary">
            <HamburgerMenuIcon className="mt-1 w-6 h-6" />
          </DrawerTrigger>
          <DrawerContent className={styles['mobile--drawer']}>
            <p className="font-bold">NOT DONE YET...</p>
            <ul>
              <li>
                <Link href="/programs/infants">Infant Program</Link>
              </li>
              <li>
                <Link href="/programs/toddlers">Toddler Program</Link>
              </li>
              <li>
                <Link href="/programs/why-choose-the-nursery">
                  Why Choose Us?
                </Link>
              </li>
              <li>
                <Link href="/calendars">Calendars</Link>
              </li>
              <li>
                <Link href="/enrollment/tuition">Tuition</Link>
              </li>
              <li>
                <Link href="/enrollment">Apply Now</Link>
              </li>
            </ul>
          </DrawerContent>
        </Drawer>
      </div>

      <div className={clsx(styles.group, styles.desktop)}>
        <NavigationMenu className={styles.menu}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Dropdown title="About">
                <DropdownMenuLinkItem
                  href="/programs/infants"
                  text="Infant Program"
                />
                <DropdownMenuLinkItem
                  href="/programs/toddlers"
                  text="Toddler Program"
                />
                <DropdownMenuLinkItem
                  href="/programs/daily-schedule"
                  text="Daily Schedule"
                />
                <DropdownMenuLinkItem
                  href="/programs/why-choose-the-nursery"
                  text="Why Choose Us?"
                />
                <DropdownMenuLinkItem href="/news" text="News" />
              </Dropdown>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Dropdown title="Admissions">
                <DropdownMenuLinkItem
                  href="/enrollment/tuition"
                  text="Tuition"
                />
                <DropdownMenuLinkItem href="/enrollment" text="Enrollment" />
              </Dropdown>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/calendars" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Calendars
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/enrollment" legacyBehavior passHref>
                <NavigationMenuLink className="!text-background font-bold py-1.5 px-4 bg-primary rounded-full hover:bg-primary/20 hover:!text-foreground !ml-7">
                  Enroll
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
