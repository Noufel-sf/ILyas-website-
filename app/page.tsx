import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import OurValues from "./components/OurValues";
import OurValues2 from "./components/OurValues2";
import CtaSection from "./components/CtaSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-transparent">
      <HeroSection />
      <OurValues2 />
      <OurValues />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
