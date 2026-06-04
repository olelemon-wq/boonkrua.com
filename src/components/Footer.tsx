import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer id="about" className="mt-auto">
      <Separator />
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-muted-foreground">
        <p>© 2024 - Boonkrua.com</p>
      </div>
    </footer>
  );
}
