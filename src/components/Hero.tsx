import { Fragment } from "react";
import Image from "next/image";
import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSkyVideo from "@/components/HeroSkyVideo";

/**
 * ข้อความรำลึกแบ่งเป็นวรรค ภาษาไทยไม่มีช่องว่างระหว่างคำ เบราว์เซอร์จึงตัดคำกลางวลีได้
 * (เช่น "ตลอด / ไป") แต่ละวรรคจึงห้ามตัด ให้ขึ้นบรรทัดใหม่ได้เฉพาะระหว่างวรรค
 */
const TRIBUTE_PHRASES = [
  "แด่พ่อผู้ล่วงลับ",
  "แม้กายดับสูญ",
  "แต่เรื่องราวของพ่อ",
  "ความดีที่พ่อทำไว้",
  "พระคุณที่พ่อมีต่อลูกๆ",
  "ทุกสิ่งจะสถิตอยู่ในใจ",
  "ของพวกเราตลอดไป",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden">
      <HeroSkyVideo />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/75" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <Image
          src="/images/memorial-portrait.png"
          alt="ภาพถ่ายอนุสรณ์"
          width={280}
          height={190}
          priority
          className="mx-auto mb-8 h-auto w-48 md:w-56"
        />
        <p className="text-2xl leading-relaxed font-semibold text-balance text-black md:text-3xl md:leading-10">
          {TRIBUTE_PHRASES.map((phrase, i) => (
            <Fragment key={phrase}>
              {i > 0 ? " " : null}
              <span className="whitespace-nowrap">{phrase}</span>
            </Fragment>
          ))}
        </p>
        <Button size="lg" className="mt-10 rounded-full px-8 shadow-lg">
          <Music />
          คลิกเพื่อฟังเพลง
        </Button>
      </div>
    </section>
  );
}
