import React from "react";
import { Button } from "@/components/ui/button";
import Hero from "@/assets/hero.jpg";

function hero() {
  function scrollToInquiry() {
    const el = document.getElementById("inquiry");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen items-center justify-center flex  "
    style={{ backgroundImage: `url(${Hero})`}}>
      {/* <div className="   bg-sky-400 rounded-none border-white shadow-[0_24px_70px_rgba(0,0,0,0.45)]"> */}
        {/* <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-lg font-extrabold">
              Start with your preferences
            </div>
            <div className="mt-1 text-sm text-white/65">
              We’ll reply with options that match.
            </div>
          </div>
          <div className="flex ">
            {[
              { k: "Interest", v: "Residential / Investment" },
              { k: "Budget", v: "Pick your range" },
              { k: "Location", v: "City / region (optional)" },
              { k: "Timeline", v: "When you want to move" },
            ].map((row) => (
              <div key={row.k} className="  px-2">
                <div className="text-xs text-white/55">{row.k}</div>
                <div className="mt-1 text-sm font-extrabold">{row.v}</div>
              </div>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-slate-800 px-3 py-2">
            <span className="text-sm font-extrabold text-emerald-200">
              24–48h
            </span>
            <span className="text-xs text-white/55">reply</span>
          </div>
        </div> */}
      {/* </div> */}
      
        
          {/* Left */}
          <div className=" w-2/4 ml-auto mr-10">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <h1 className=" text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
                Buy the right{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  lot in Florida
                </span>{" "}
                with current availability
              </h1>

              <p className="  text-white/70 text-base md:text-lg leading-7">
                Tell us what you want We match you with available residential or
                investment lots and provide pricing location fit and next steps
                so you can move confidently
              </p>
              <div className="mt-2">
                <Button
                  onClick={scrollToInquiry}
                  className="bg-emerald-500 hover:bg-emerald-500/90 text-black font-extrabold"
                  size="lg"
                >
                  Request Current Options
                </Button>
              </div>
            </div>
          </div>
       <div className="absolute bottom-0 left-0 w-full h-16">
   <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[#d2b48c] via-[#2f5d50]/60 to-transparent backdrop-blur-0" />
   </div>
    </section>
  );
}

export default hero;
