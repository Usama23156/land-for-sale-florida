import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Opportunities from "@/assets/opportunities.jpg";
import Hero from "@/assets/hero.jpg";
import Opp1 from "@/assets/Opp1.jpg";
import Opp2 from "@/assets/Opp2.jpg";
import Opp3 from "@/assets/Opp3.jpg";

function opportunities() {
  function scrollToInquiry() {
    const el = document.getElementById("inquiry");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <section id="opportunities" className="relative bg-[#d2b48c]">
      <div className="absolute bottom-0 left-0 w-full h-16">
        <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[#e8d5b7] via-[#d2b48c]/60 to-transparent backdrop-blur-0" />
      </div>
      <div className="mx-auto px-28 py-10 md:py-14">
        <div className=" flex flex-col items-center">
          <div className="text-sm font-extrabold text-[#2f5d50] tracking-wide">
            OPPORTUNITY TYPES
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
            Available land opportunities in Florida
          </h2>
          <p className="mt-3 max-w-[68ch] text-white/70 leading-7 text-[#3e2c1c]">
            Choose the type that fits your goal. Submit an inquiry and we’ll
            match you with current listings and next steps.
          </p>
        </div>

        <div className="mt-8 gap-7 grid grid-cols-1 md:grid-cols-2 ">
          {/* {[
            {
              title: "Residential Lots",
              desc: "Great for building a home or investing in a family-ready area.",
              bullets: [
                "Zoning & basics explained",
                "Location fit by preferences",
                "Buyer guidance",
              ],
            },
            {
              title: "Investment Lots",
              desc: "For long-term potential and portfolio growth with clear expectations.",
              bullets: [
                "Investment-focused options",
                "Timeline support",
                "Next-step clarity",
              ],
            },
            {
              title: "Mixed / Flexible",
              desc: "Not sure yet? Tell us your budget and we’ll offer the best match.",
              bullets: [
                "Shortlist tailored to you",
                "Multiple option categories",
                "No pressure—just clarity",
              ],
            },
          ].map((card) => (
          ))} */}
          <div className="flex  flex-col gap-7">
            <div
              className=" relative rounded-3xl pl-0 py-0 pr-28 overflow-hidden flex-row border-red-50 bg-white/5 p-6 backdrop-blue bg-cover"
              style={{ backgroundImage: `url(${Opp1})` }}
            >
              <div className="absolute bottom-0 left-0 w-full h-16">
                <div className="absolute inset-0 bottom-0 left-0 w-[40%]  bg-gradient-to-r from-[#f5edd3] via-[#f5edd3]/90 to-transparent " />
              </div>
              <div className=" items-start flex flex-col pr-28 py-4 pl-3 z-50 ">
                <div className="text-xl text-[#3e2c1c] font-extrabold">
                  Residential Lots
                </div>
                <div className=" text-sm text-[#3e2c1c]leading-6">
                  Great for building a home or investing in a family-ready area.
                </div>
                <Separator className=" bg-white/10" />
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-white/70">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-200 font-black">
                      ✓
                    </span>
                    <span className="leading-6 text-[#3e2c1c]">
                      Zoning & basics explained
                    </span>
                  </li>
                  <li className="flex gap-2 text-sm text-white/70">
                    <span className="mt-0.5 h-5 w-5 rounded-full  bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-200 font-black">
                      ✓
                    </span>
                    <span className="leading-6 text-[#3e2c1c]">
                      Location fit by preferences
                    </span>
                  </li>
                  <li className="flex gap-2 text-sm text-white/70">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-200 font-black">
                      ✓
                    </span>
                    <span className="leading-6 text-[#3e2c1c]">
                      Buyer guidance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <Card
              className="rounded-3xl flex-row border-white/10 bg-white/5 p-6 backdrop-blue bg-cover"
              style={{ backgroundImage: `url(${Opp2})` }}
            >
              <div>
                <div className="text-xl font-extrabold">Residential Lots</div>
                <div className=" text-sm text-white/65 leading-6">
                  Great for building a home or investing in a family-ready area.
                </div>
                <Separator className=" bg-white/10" />
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-white/70">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-200 font-black">
                      ✓
                    </span>
                    <span className="leading-6">Zoning & basics explained</span>
                  </li>
                  <li className="flex gap-2 text-sm text-white/70">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-200 font-black">
                      ✓
                    </span>
                    <span className="leading-6">
                      Location fit by preferences
                    </span>
                  </li>
                  <li className="flex gap-2 text-sm text-white/70">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-200 font-black">
                      ✓
                    </span>
                    <span className="leading-6">Buyer guidance</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          <Card
            className="rounded-3xl flex-row border-white/10 bg-white/5 p-6 backdrop-blue bg-cover"
            style={{ backgroundImage: `url(${Opp3})` }}
          >
            <div >
              <div className="text-xl font-extrabold">Residential Lots</div>
              <div className=" text-sm text-white/65 leading-6">
                Great for building a home or investing in a family-ready area.
              </div>
              <Separator className=" bg-white/10" />
              <ul className="space-y-2">
                <li className="flex gap-2 text-sm text-white/70">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-200 font-black">
                    ✓
                  </span>
                  <span className="leading-6">Zoning & basics explained</span>
                </li>
                <li className="flex gap-2 text-sm text-white/70">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-200 font-black">
                    ✓
                  </span>
                  <span className="leading-6">Location fit by preferences</span>
                </li>
                <li className="flex gap-2 text-sm text-white/70">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-200 font-black">
                    ✓
                  </span>
                  <span className="leading-6">Buyer guidance</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default opportunities;
