"use client";

import { useEffect, useState } from "react";
import { setReadingPosition } from "@/lib/reading-position";

/** หาหัวข้อที่กำลังอ่านจากตำแหน่งเลื่อนจอ แล้วแชร์ให้กระดานและปุ่มกลับขึ้นบนสุด */
export function useActiveSection(ids: string[], { share = false } = {}) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join("|");

  useEffect(() => {
    const sections = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-160px 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [key]);

  useEffect(() => {
    if (!share) return;
    const index = active ? key.split("|").indexOf(active) : 0;
    setReadingPosition(Math.max(0, index));
  }, [active, key, share]);

  useEffect(() => {
    if (!share) return;
    return () => setReadingPosition(null);
  }, [share]);

  return active;
}
