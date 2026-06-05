import Link from "next/link";
import { ChevronRight, Mail, MessageCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo, contactSections } from "@/data/contact-admin";

export const metadata = {
  title: "ติดต่อแอดมิน — Boonkrua",
  description: "ติดต่อแอดมิน Boonkrua.com แจกหนังสือ ทุนการศึกษา QR Code และกำหนดการ",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <nav
          aria-label="breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-3.5 shrink-0" />
          <span className="text-foreground">ติดต่อแอดมิน</span>
        </nav>

        <header className="mb-10 text-center">
          <h1 className="text-2xl font-semibold tracking-wide text-black md:text-3xl">
            ติดต่อแอดมิน
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            ช่องทางติดต่อและข้อมูลเกี่ยวกับกิจกรรมแจกหนังสือ ทุนการศึกษา
            และกำหนดการต่างๆ ของ Boonkrua.com
          </p>
        </header>

        <nav
          aria-label="หัวข้อติดต่อแอดมิน"
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {contactSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full border border-border/60 bg-muted/30 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:bg-muted/50 hover:text-primary"
            >
              {section.title}
            </a>
          ))}
        </nav>

        <div className="space-y-10">
          {contactSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <Card className="border border-border/40 shadow-[0_5px_15px_0_rgba(0,0,0,0.06)]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-black md:text-2xl">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                  <p>{section.description}</p>
                  {section.details && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.id === "admin" && (
                    <ul className="space-y-3 pt-2">
                      <li>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
                        >
                          <Mail className="size-4 shrink-0" />
                          {contactInfo.email}
                        </a>
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <MessageCircle className="size-4 shrink-0 text-muted-foreground" />
                        LINE: {contactInfo.line}
                      </li>
                      <li>
                        <a
                          href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                          className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
                        >
                          <Phone className="size-4 shrink-0" />
                          {contactInfo.phone}
                        </a>
                      </li>
                    </ul>
                  )}

                  {section.id === "qr" && (
                    <div className="mx-auto flex aspect-square w-48 items-center justify-center rounded-lg border border-dashed border-border/60 bg-muted/20 text-sm text-muted-foreground">
                      QR Code
                    </div>
                  )}

                  {section.id === "schedule" && (
                    <div className="rounded-lg border border-border/40 bg-muted/20 px-4 py-6 text-center text-sm text-muted-foreground">
                      กำหนดการจะประกาศโดยแอดมิน
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
