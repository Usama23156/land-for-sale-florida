import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Opportunities from "@/components/sections/Opportunities";
import Trusted from "@/components/sections/Trusted";
import Inquiry from "@/components/sections/Inquiry";
import Footer from "@/components/sections/Footer";

export default function LotsLandingPage() {
  return (
    <div className="min-h-screen bg-[#FEFAF6] text-[#3C2F2F]">
      <Navbar />
      <main>
        <Hero />
        <Opportunities />
        <Trusted />
        <Inquiry />
      </main>
      <Footer />
    </div>
  );
}