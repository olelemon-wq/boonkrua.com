"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import ChessPromoCard from "@/components/chess/ChessPromoCard";
import { currentChessEdition } from "@/data/chess";

const STORAGE_KEY = "boonkrua:chess-promo-seen";
const OPEN_DELAY = 900; // ms — ให้หน้าแรกขึ้นก่อน แล้วค่อยเด้ง

/** วันที่วันนี้ตามเวลาไทย เช่น "2026-11-26" */
function todayInBangkok() {
  return new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Bangkok" });
}

/**
 * popup โปรโมตการแข่งขันครั้งปัจจุบัน แสดงที่หน้าแรกวันละครั้ง
 * ปิดแล้ววันนั้นจะไม่เด้งอีก (จำไว้ในเครื่องผู้ชม)
 */
export default function ChessPromoPopup() {
  const edition = currentChessEdition;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (edition.status === "past") return;
    let seen: string | null = null;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      /* storage unavailable: still show once per page load */
    }
    if (seen === todayInBangkok()) return;
    const timer = window.setTimeout(() => setOpen(true), OPEN_DELAY);
    return () => window.clearTimeout(timer);
  }, [edition.status]);

  const close = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, todayInBangkok());
    } catch {
      /* ignore */
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
      }}
    >
      <DialogContent
        showCloseButton={false}
        overlayClassName="bg-black/55 supports-backdrop-filter:backdrop-blur-sm"
        className="max-h-[calc(100dvh-2rem)] max-w-[calc(100%-2rem)] gap-0 overflow-y-auto rounded-3xl bg-background p-0 sm:max-w-md"
      >
        <DialogClose
          aria-label="ปิด"
          className="absolute top-3 right-3 z-10 flex size-10 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/50 focus-visible:ring-3 focus-visible:ring-white/60 focus-visible:outline-none"
        >
          <X className="size-5" />
        </DialogClose>
        <ChessPromoCard
          edition={edition}
          variant="dialog"
          onNavigate={close}
          title={
            <DialogTitle className="text-2xl leading-snug font-semibold text-background">
              บุญเครือรำลึก
            </DialogTitle>
          }
        />
        <DialogDescription className="sr-only">
          การแข่งขันหมากรุกไทย บุญเครือรำลึก ครั้งที่ {edition.noThai}{" "}
          {edition.dateLabel} {edition.venue} รางวัลรวม {edition.prize}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
