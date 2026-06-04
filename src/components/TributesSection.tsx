import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mourningTributes } from "@/data/mourning-tributes";
import TributesCarousel from "@/components/TributesCarousel";

export default function TributesSection() {
  return (
    <section id="memorials" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-center text-2xl font-light tracking-wide text-foreground">
        คำไว้อาลัยลูกหลาน
      </h2>
      <TributesCarousel className="px-2 md:px-8">
        {mourningTributes.map((tribute) => (
          <Card
            key={tribute.href}
            data-tribute-card
            className="w-[min(100%,280px)] shrink-0 snap-start flex-col border-0 bg-background py-0 shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] ring-0 sm:w-[280px]"
          >
            <CardContent className="flex flex-col items-center px-6 pt-8 pb-2 text-center">
              {tribute.image ? (
                <Image
                  src={tribute.image}
                  alt={tribute.name}
                  width={100}
                  height={100}
                  className="mb-4 size-[100px] rounded-full border border-border/80 object-cover object-top"
                />
              ) : (
                <span className="mb-4 flex size-[100px] items-center justify-center rounded-full border border-border/80 bg-muted/30 text-2xl font-medium text-muted-foreground">
                  {tribute.initial}
                </span>
              )}
              <CardTitle className="text-lg leading-snug font-medium md:text-xl">
                {tribute.name}
              </CardTitle>
            </CardContent>
            <CardFooter className="justify-center border-0 bg-transparent px-6 pb-6 pt-2">
              <Link
                href={tribute.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "h-8 rounded-full border-border/60 bg-muted/30 px-4 text-xs font-normal text-muted-foreground hover:border-primary/30 hover:bg-muted/50 hover:text-primary"
                )}
              >
                อ่านต่อ
              </Link>
            </CardFooter>
          </Card>
        ))}
      </TributesCarousel>
    </section>
  );
}
