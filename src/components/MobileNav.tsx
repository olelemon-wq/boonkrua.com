"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  BookUser,
  ChevronRight,
  Clapperboard,
  Crown,
  Flower2,
  Images,
  MessageCircle,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SoonBadge } from "@/components/SoonBadge";
import { navMenu, type NavMenuGroup } from "@/data/nav-menu";
import { cn } from "@/lib/utils";

const GROUP_ICONS: Record<string, LucideIcon> = {
  ประวัติโดยย่อ: BookUser,
  เรื่องเล่ามหาลัยชีวิต: BookOpen,
  คำไว้อาลัย: Flower2,
  ภาพต่างๆ: Images,
  วีดีโอต่างๆ: Clapperboard,
  กิจกรรม: Crown,
  ติดต่อแอดมิน: MessageCircle,
};

/** ในแผ่นเมนู ไม่ต้องไล่รายชื่อไว้อาลัยทั้ง 10 ท่าน ให้ไปหน้ารวมแทน */
function sheetItems(group: NavMenuGroup) {
  if (group.label !== "คำไว้อาลัย") return group.items;
  return group.items.filter(
    (item) => item.status === "soon" || !item.href.startsWith("/mourning/")
  );
}

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/** แผ่นเมนูทั้งหมด เลื่อนขึ้นจากด้านล่าง เปิดจากแท็บ "เมนู" ของแถบล่าง */
export default function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        showCloseButton={false}
        className="max-h-[85dvh] gap-0 overflow-y-auto rounded-t-3xl pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        <div aria-hidden className="mx-auto mt-2.5 h-1.5 w-10 rounded-full bg-border" />
        <SheetHeader className="flex-row items-center justify-between px-5 pt-3 pb-1">
          <SheetTitle className="text-xl font-semibold">เมนูทั้งหมด</SheetTitle>
          <SheetClose
            aria-label="ปิดเมนู"
            className="-mr-2 flex size-11 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted active:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <X className="size-6" />
          </SheetClose>
        </SheetHeader>

        <nav aria-label="เมนูทั้งหมด" className="space-y-5 px-5 pt-2 pb-6">
          {navMenu.map((group) => {
            const Icon = GROUP_ICONS[group.label] ?? ChevronRight;
            return (
              <section key={group.label}>
                <h2 className="mb-1 flex items-center gap-2 text-sm font-semibold text-foreground/70">
                  <Icon aria-hidden className="size-4 text-primary" />
                  {group.label}
                </h2>
                <ul className="divide-y divide-border overflow-hidden rounded-2xl bg-surface">
                  {sheetItems(group).map((item) => {
                    if (item.status === "soon") {
                      return (
                        <li key={item.href}>
                          <span
                            aria-disabled="true"
                            className="flex min-h-12 items-center justify-between gap-3 px-4 py-2.5 text-base text-muted-foreground"
                          >
                            {item.label}
                            <SoonBadge />
                          </span>
                        </li>
                      );
                    }
                    const current = pathname === item.href.split("#")[0] && !item.href.includes("#");
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={current ? "page" : undefined}
                          onClick={() => onOpenChange(false)}
                          className={cn(
                            "flex min-h-12 items-center justify-between gap-3 px-4 py-2.5 text-base transition-colors active:bg-card-header/60 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                            current ? "font-semibold text-foreground" : "text-foreground/85"
                          )}
                        >
                          {item.label}
                          <ChevronRight aria-hidden className="size-4 shrink-0 text-foreground/40" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
