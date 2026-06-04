"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MobileNav from "@/components/MobileNav";
import { navMenu } from "@/data/nav-menu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="เถ้าแก่บุญเครือ"
            width={464}
            height={204}
            priority
            className="h-14 w-auto sm:h-16 md:h-20 lg:h-24"
          />
        </Link>

        <div className="hidden lg:block">
          <NavigationMenu align="start" className="max-w-none flex-none">
            <NavigationMenuList className="flex-wrap justify-end gap-1">
              {navMenu.map((group) => (
                <NavigationMenuItem key={group.label}>
                  <NavigationMenuTrigger className="h-10 px-3 text-base font-normal lg:text-lg">
                    {group.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-0">
                    <ul
                      className={`grid gap-1 p-3 text-left ${
                        group.items.length > 6
                          ? "max-h-80 w-80 overflow-y-auto"
                          : "w-72"
                      }`}
                    >
                      {group.items.map((item) => (
                        <li key={item.href} className="text-left">
                          <NavigationMenuLink
                            render={<Link href={item.href} />}
                            className="justify-start whitespace-normal py-2.5 text-base lg:text-lg"
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}
