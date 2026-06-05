"use client";

import {
  createContext,
  useContext,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export function MourningReadingProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(DEFAULT_STEP);

  return (
    <MourningReadingContext.Provider value={{ step, setStep }}>
      {children}
    </MourningReadingContext.Provider>
  );
}

export function MourningFontSizeToolbar() {
  const { step, setStep } = useMourningReading();
  const scale = FONT_STEPS[step];

  return (
    <div
      role="toolbar"
      aria-label="ปรับขนาดตัวอักษร"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2 px-6 py-3">
        <span className="text-sm text-muted-foreground">ขนาดตัวอักษร</span>
        <Button
          type="button"
          variant="outline"
          size="sm"
          aria-label="ลดขนาดตัวอักษร"
          disabled={step === 0}
          onClick={() => setStep(Math.max(0, step - 1))}
          className="h-8 gap-1 rounded-full px-3 text-sm"
        >
          <Minus className="size-3.5" />
          A
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          aria-label="เพิ่มขนาดตัวอักษร"
          disabled={step === FONT_STEPS.length - 1}
          onClick={() =>
            setStep(Math.min(FONT_STEPS.length - 1, step + 1))
          }
          className="h-8 gap-1 rounded-full px-3 text-sm font-semibold"
        >
          <Plus className="size-3.5" />
          A
        </Button>
        <span className="sr-only">
          ขนาดปัจจุบัน {Math.round(scale.mobile * 100)} เปอร์เซ็นต์บนมือถือ
        </span>
      </div>
    </div>
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
