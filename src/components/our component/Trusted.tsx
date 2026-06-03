import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Trust from "@/assets/trusted.jpg";

function Trusted() {
  function scrollToInquiry() {
    const el = document.getElementById("inquiry");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <section id="trusted" className="relative">
      <div className="mx-auto px-20 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
          <div className="mt-12">
            <div className="text-sm font-extrabold  text-[#2f5d50] tracking-wide">
              TRUSTED PROCESS
            </div>
            <h2 className="mt-2 text-3xl  px-10 md:text-4xl font-extrabold pb-7">
              A clear process from inquiry to next steps
            </h2>
            <p className="mt-3 text-[#3e2c1c] leading-7 px-10 pb-7">
              We make it easy to understand what’s available and what you can do
              next. Our goal is to help you make a confident decision.
            </p>

           

            <div className="space-y-3  ">
              {[
                "Response within 24–48 hours",
                "Shortlist tailored to your budget + preferences",
                "No spam—only relevant lot options",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 text-sm px-5 text-[#3e2c1c] pb-3"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2f5d50] border border-emerald-500/40 text-emerald-200 font-black">
                    ✓
                  </span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
           <div className="gap-7 mt-4 grid grid-cols-2">
              {[
                {
                  step: "Susan M.",
                  title: "Daughter, Tampa, FL",
                  desc: "“Dad slipped twice getting into the old tub. Since AquaSafe installed his walk-in tub, we are not afraid of another fall or injury.”",
                },
                {
                  step: "Robert H.",
                  title: "Naples, FL",
                  desc: "“I was scared every time I bathed. Now I walk right in. I feel safe, and my kids worry less You’ll know what’s next—without confusion.”",
                },
                {
                  step: "Patricia L.",
                  title: "Orlando, FL",
                  desc: "“They explained how it prevents falls without pressure. Professional install, and no injuries since.”",
                },
                {
                  step: "Patricia L.",
                  title: "Orlando, FL",
                  desc: "“They explained how it prevents falls without pressure. Professional install, and no injuries since.”",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="mb-4  shadow-[0_24px_70px_rgba(0,0,0,0.45)] rounded-xl p-3"
                >
                  <div className="items-start flex flex-col  pb-4 gap-3">
                    <div className="flex flex-col items-start">
                      <div className="mt-1  text-[#3e2c1c] leading-6">
                        {s.desc}
                      </div>
                    </div>
                    <div className="flex  items-start justify-center  border-white/10 bg-white/5 font-black">
                      {s.step}
                      
                    </div>
                      <div className="font-extrabold text-[#2f5d50]">{s.title}</div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16">
        <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[#d2b48c] via-[#e8d5b7]/60 to-transparent backdrop-blur-0" />
      </div>
    </section>
  );
}

export default Trusted;
