"use client";
import styles from "./nav.module.css";

import Link from "next/link";
import { Butterfly_Kids } from "next/font/google";

const kids = Butterfly_Kids({ weight: ["400"], subsets: ["latin"] });

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import clsx from "clsx";
import { HorseIcon } from "../icons/horse";
import { Logo } from "../icons/logo";

export function Nav({ className }: { className: string }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.group}>
        <Link href="/" className="transition-all block">
          <div className={styles["logo-group"]}>
            <div className={styles.figure}>
              <h1>The Nursery</h1>
              <Logo />
              <h2>At Our Lady Of Sorrows</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.group}>
        <NavigationMenu className={styles.menu}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={clsx(navigationMenuTriggerStyle())}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
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
                  className={clsx(
                    navigationMenuTriggerStyle(),
                    "bg-primary",
                    "ml-8",
                    "!text-background py-2 rounded",
                    "active:bg-foreground"
                  )}
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
