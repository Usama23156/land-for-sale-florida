import * as React from "react";
import Hero from "@/components/our component/hero"
import Opportunities from "./components/our component/opportunities";
import Inquiry from "./components/our component/inquiry";
import { Button } from "@/components/ui/button";
import Trusted from "@/components/our component/Trusted";
import Navbar from "@/components/our component/navbar"
import Footer from "@/components/our component/footer"


function scrollToInquiry() {
  const el = document.getElementById("inquiry");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function LotsLandingPage() {
  const [privacyOk, setPrivacyOk] = React.useState(true);

  return (
    <div className="min-h-screen bg-[#e8d5b7] text-white">
      <Navbar/>
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-400/20 via-cyan-400/10 to-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-60 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-400/10 to-emerald-400/15 blur-3xl" />
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <Hero/>
      <Opportunities/>
      <Trusted/>     
      <Inquiry/>
      <Footer/>
    </div>
  );
}