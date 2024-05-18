"use client";

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

export function Nav({ className }: { className: string }) {
  return (
    <div>
      <Link href="/" className="transition-all block">
        <h1 className={clsx("text-2xl mx-auto w-full text-center mb-2 py-8")}>
          The{" "}
          <span className={clsx(kids.className, "text-8xl", "text-primary")}>
            Nursery
          </span>{" "}
          at Our Lady of Sorrows
        </h1>
      </Link>
      <NavigationMenu className="mx-auto">
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
