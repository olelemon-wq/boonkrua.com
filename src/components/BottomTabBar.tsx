"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookUser,
  Crown,
  Flower2,
  House,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import MobileNav from "@/components/MobileNav";
import { cn } from "@/lib/utils";

type Tab = {
  label: string;
  href: string;
  icon: LucideIcon;
  match: (pathname: string) => boolean;
};

const TABS: Tab[] = [
  { label: "หน้าแรก", href: "/", icon: House, match: (p) => p === "/" },
  { label: "ประวัติ", href: "/history", icon: BookUser, match: (p) => p.startsWith("/history") },
  { label: "ไว้อาลัย", href: "/mourning", icon: Flower2, match: (p) => p.startsWith("/mourning") },
  { label: "หมากรุก", href: "/chess", icon: Crown, match: (p) => p.startsWith("/chess") },
];

const tabClass =
  "group relative flex min-h-14 flex-col items-center justify-center gap-0.5 pt-1.5 pb-1 text-[0.8rem] leading-tight transition-colors focus-visible:outline-none";

function TabBody({
  icon: Icon,
  label,
  active,
}: {
  icon: LucideIcon;
  label: string;
  active: boolean;
}) {
  return (
    <>
      <span
        className={cn(
          "flex h-8 w-14 items-center justify-center rounded-full transition-colors group-focus-visible:ring-3 group-focus-visible:ring-ring/50",
          active ? "bg-card-header" : "group-active:bg-muted"
        )}
      >
        <Icon aria-hidden className="size-[1.375rem]" strokeWidth={active ? 2.4 : 1.8} />
      </span>
      <span className={active ? "font-semibold" : "font-medium"}>{label}</span>
    </>
  );
}

/** แถบเมนูหลักด้านล่างจอแบบแอป แสดงเฉพาะจอที่เล็กกว่า lg */
export default function BottomTabBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const anyTabMatches = TABS.some((t) => t.match(pathname));

  return (
    <>
      {/* เว้นที่ท้ายหน้า ไม่ให้แถบบังเนื้อหาและ footer */}
      <div aria-hidden className="h-(--tabbar-h) shrink-0 lg:hidden" />

      <nav
        aria-label="เมนูหลัก"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
      >
        <ul className="mx-auto grid max-w-lg grid-cols-5">
          {TABS.map((tab) => {
            const active = !menuOpen && tab.match(pathname);
            return (
              <li key={tab.href}>
                <Link
                  href={tab.href}
                  aria-current={active ? "page" : undefined}
                  onClick={(event) => {
                    if (pathname === tab.href) {
                      event.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={cn(
                    tabClass,
                    active ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  <TabBody icon={tab.icon} label={tab.label} active={active} />
                </Link>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className={cn(
                tabClass,
                "w-full",
                menuOpen || !anyTabMatches ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <TabBody
                icon={LayoutGrid}
                label="เมนู"
                active={menuOpen || !anyTabMatches}
              />
            </button>
          </li>
        </ul>
      </nav>

      <MobileNav open={menuOpen} onOpenChange={setMenuOpen} />
    </>
  );
}
