import Script from "next/script";
import { BookOpen } from "lucide-react";

export default function BooksSection() {
  return (
    <section id="books" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 flex items-center justify-center gap-2 text-center text-2xl font-semibold">
          <BookOpen className="size-6 text-primary" />
          หนังสืออนุสรณ์
        </h2>
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />
        <div
          className="elfsight-app-54ad7494-4793-442e-9e1e-e82231954fca"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}
