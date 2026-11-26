import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ActivitiesSection from "@/components/ActivitiesSection";
import BooksSection from "@/components/BooksSection";
import TributesSection from "@/components/TributesSection";
import Footer from "@/components/Footer";
import ChessPromoPopup from "@/components/chess/ChessPromoPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ActivitiesSection />
        <BooksSection />
        <TributesSection />
      </main>
      <Footer />
      <ChessPromoPopup />
    </>
  );
}
