import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import ProblemAndObjectives from "./components/ProblemAndObjectives";
import OurVision from "./components/OurVision";
import OurValues from "./components/OurValues";
import CtaSection from "./components/CtaSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-transparent">
      <HeroSection />
      <OurVision />
      <ProblemAndObjectives />
      <OurValues />
      {/* <OurValues2 /> */}
      <FaqSection />
      <CtaSection />
    </main>
  );
}
