import Link from "next/link";
import { Mail, Shield } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer id="about" className="mt-auto">
      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© 2024 - Boonkrua.com</p>
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "text-muted-foreground"
            )}
          >
            <Mail />
            Contact Us
          </Link>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "text-muted-foreground"
            )}
          >
            <Shield />
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
