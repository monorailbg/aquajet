import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MaterialFinder from "@/components/MaterialFinder";
import Advantages from "@/components/Advantages";
import MachinePark from "@/components/MachinePark";
import ProcessSteps from "@/components/ProcessSteps";
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
        <ProcessSteps />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
