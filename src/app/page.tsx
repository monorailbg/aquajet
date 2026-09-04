import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MaterialFinder from "@/components/MaterialFinder";
import Advantages from "@/components/Advantages";
import MachinePark from "@/components/MachinePark";
import TeamSection from "@/components/TeamSection";
import CareersSection from "@/components/CareersSection";
import ProcessSteps from "@/components/ProcessSteps";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <MaterialFinder />
        <MachinePark />
        <TeamSection />
        <CareersSection />
        <ProcessSteps />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
