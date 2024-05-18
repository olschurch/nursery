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
} from "./ui/navigation-menu";
import clsx from "clsx";
import { HorseIcon } from "./icons/horse";

export function Nav({ className }: { className: string }) {
  return (
    <div>
      <Link href="/" className="transition-all block">
        <div className="flex items-center justify-center mb-4 flex-col">
          <figure className="w-24 text-primary mr-4">
            <HorseIcon />
          </figure>
          <h1 className={clsx("text-xl mb-8")}>
            The
            <span
              className={clsx(
                kids.className,
                "text-6xl",
                "leading-8",
                "mb-8",
                "text-primary"
              )}
            >
              Nursery
            </span>{" "}
            at Our Lady of Sorrows
          </h1>
        </div>
      </Link>
      <NavigationMenu className={styles.menu}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/enrollment" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(navigationMenuTriggerStyle())}
              >
                Enrollment
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
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
            <Link href="/childcare" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(navigationMenuTriggerStyle())}
              >
                Childcare
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/waddlers" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(navigationMenuTriggerStyle())}
              >
                Waddlers
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
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
