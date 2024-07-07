"use client";
import styles from "./nav.module.css";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import clsx from "clsx";
import { LogoGroup } from "../LogoGroup/LogoGroup";
import { Dropdown, DropdownMenuLinkItem } from "../Dropdown/Dropdown";

export function Nav({ className }: { className: string }) {
  return (
    <nav className={clsx(styles.nav)}>
      <div className={styles.group}>
        <LogoGroup />
      </div>
      <div className={styles.group}>
        <NavigationMenu className={styles.menu}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/programs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={clsx(navigationMenuTriggerStyle())}
                >
                  Programs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Dropdown title="About Us">
                <DropdownMenuLinkItem href="/tuition" text="Tuition" />
              </Dropdown>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/calendar" legacyBehavior passHref>
                <NavigationMenuLink
                  className={clsx(navigationMenuTriggerStyle())}
                >
                  Calendar
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/news" legacyBehavior passHref>
                <NavigationMenuLink
                  className={clsx(navigationMenuTriggerStyle())}
                >
                  News
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/enrollment" legacyBehavior passHref>
                <NavigationMenuLink
                  className={clsx(navigationMenuTriggerStyle(), styles.action)}
                >
                  Enrollment
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
