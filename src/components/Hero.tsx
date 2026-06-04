import Image from "next/image";
import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-clouds.jpg"
        alt="ท้องฟ้าเมฆขาว"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <Image
          src="/images/memorial-portrait.png"
          alt="ภาพถ่ายอนุสรณ์"
          width={280}
          height={190}
          priority
          className="mx-auto mb-8 h-auto w-48 md:w-56"
        />
        <p className="text-xl leading-relaxed font-light text-muted-foreground md:text-2xl md:leading-10">
          แด่พ่อผู้ล่วงลับ แม้กายดับสูญ แต่เรื่องราวของพ่อ ความดีที่พ่อทำไว้
          พระคุณที่พ่อมีต่อลูกๆ ทุกสิ่งจะสถิตอยู่ในใจ ของพวกเราตลอดไป
        </p>
        <Button size="lg" className="mt-10 rounded-full px-8 shadow-lg">
          <Music />
          คลิกเพื่อฟังเพลง
        </Button>
      </div>
    </section>
  );
}
