import { useSyncExternalStore } from "react";

/**
 * ตำแหน่งหัวข้อที่กำลังอ่านในหน้าที่มีกระดานหมากรุก (index ของหัวข้อ)
 * ใช้ร่วมกันระหว่างแถบหัวข้อ กระดานเดินตามการอ่าน และปุ่มกลับขึ้นบนสุด
 * null = หน้านี้ไม่มีกระดาน
 */
let current: number | null = null;
const listeners = new Set<() => void>();

export function setReadingPosition(next: number | null) {
  if (next === current) return;
  current = next;
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useReadingPosition() {
  return useSyncExternalStore(subscribe, () => current, () => null);
}
