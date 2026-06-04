"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navMenu } from "@/data/nav-menu";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            className="lg:hidden"
            aria-label="เปิดเมนู"
          />
        }
      >
        <Menu className="size-7" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm overflow-y-auto">
        <SheetHeader className="border-b px-4 pb-4 pt-4 text-left">
          <SheetTitle className="text-lg">เมนู</SheetTitle>
        </SheetHeader>
        <Accordion className="px-4">
          {navMenu.map((group) => (
            <AccordionItem key={group.label} value={group.label}>
              <AccordionTrigger className="px-0 py-3 text-base font-medium no-underline hover:no-underline md:text-lg">
                {group.label}
              </AccordionTrigger>
              <AccordionContent className="[&_a]:no-underline [&_a]:hover:no-underline">
                <ul className="flex flex-col gap-1 pb-2 text-left">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg py-2.5 pr-3 text-base text-muted-foreground no-underline transition-colors hover:bg-muted hover:text-foreground hover:no-underline md:text-lg"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
