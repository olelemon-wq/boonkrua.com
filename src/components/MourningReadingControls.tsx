"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const FONT_STEPS = [
  { mobile: 0.875, desktop: 1 },
  { mobile: 1, desktop: 1.125 },
  { mobile: 1.125, desktop: 1.25 },
  { mobile: 1.25, desktop: 1.375 },
  { mobile: 1.375, desktop: 1.5 },
] as const;

const DEFAULT_STEP = 1;

type MourningReadingContextValue = {
  step: number;
  setStep: (step: number) => void;
};

const MourningReadingContext = createContext<MourningReadingContextValue | null>(
  null
);

function useMourningReading() {
  const context = useContext(MourningReadingContext);
  if (!context) {
    throw new Error(
      "MourningReading components must be used within MourningReadingProvider"
    );
  }
  return context;
}

const STORAGE_KEY = "boonkrua:reading-step";

export function MourningReadingProvider({ children }: { children: ReactNode }) {
  const [step, setStepState] = useState(DEFAULT_STEP);

  // จำขนาดตัวอักษรที่เลือกไว้ ใช้ต่อได้ทุกหน้าคำไว้อาลัย
  useEffect(() => {
    try {
      const saved = Number(window.localStorage.getItem(STORAGE_KEY));
      if (Number.isInteger(saved) && saved >= 0 && saved < FONT_STEPS.length) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- sync from storage after hydration
        setStepState(saved);
      }
    } catch {
      /* storage unavailable: keep default */
    }
  }, []);

  const setStep = (next: number) => {
    setStepState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(next));
    } catch {
      /* ignore */
    }
  };

  return (
    <MourningReadingContext.Provider value={{ step, setStep }}>
      {children}
    </MourningReadingContext.Provider>
  );
}

/** ปุ่ม "Aa" ข้างหัวเรื่อง กดแล้วเปิดตัวปรับขนาดตัวอักษร */
export function MourningFontSizeButton() {
  const { step, setStep } = useMourningReading();
  const scale = FONT_STEPS[step];
  const percent = Math.round(scale.desktop * 100);

  return (
    <Popover>
      <PopoverTrigger
        aria-label="ปรับขนาดตัวอักษร"
        className="inline-flex h-11 items-center gap-1.5 rounded-full bg-surface px-4 text-base font-medium text-foreground/85 transition-colors hover:bg-card-header/60 active:bg-card-header focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none data-popup-open:bg-card-header"
      >
        <span aria-hidden className="text-sm">A</span>
        <span aria-hidden className="text-lg leading-none">A</span>
        <span className="ml-0.5 text-sm font-normal">ขนาดตัวอักษร</span>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto gap-3 rounded-2xl p-3">
        <p className="px-1 text-sm text-muted-foreground">ขนาดตัวอักษร</p>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            aria-label="ลดขนาดตัวอักษร"
            disabled={step === 0}
            onClick={() => setStep(Math.max(0, step - 1))}
            className="size-11 rounded-full text-base"
          >
            <Minus className="size-4" />
          </Button>
          <span
            aria-live="polite"
            className="w-14 text-center text-base font-medium tabular-nums"
          >
            {percent}%
          </span>
          <Button
            type="button"
            variant="outline"
            aria-label="เพิ่มขนาดตัวอักษร"
            disabled={step === FONT_STEPS.length - 1}
            onClick={() => setStep(Math.min(FONT_STEPS.length - 1, step + 1))}
            className="size-11 rounded-full text-base"
          >
            <Plus className="size-4" />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function MourningReadableBody({ children }: { children: ReactNode }) {
  const { step } = useMourningReading();
  const scale = FONT_STEPS[step];

  return (
    <div
      className="mourning-readable-body leading-relaxed"
      style={
        {
          "--reading-mobile": scale.mobile,
          "--reading-desktop": scale.desktop,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
