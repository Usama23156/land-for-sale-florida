import { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png"

export default function Navbar() {
    function scrollToInquiry() {
  const el = document.getElementById("inquiry");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

  return (
    <div className="">
        <div className=" ">
          <div className="flex items-center justify-between gap-3  border border-white/10  px-16 py-3 shadow-lg">
          <div className="flex gap-3">
            <div className="bg-white rounded-full">
             <img src={Logo} alt="" className="w-10" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-extrabold">
                Lots For Sale
              </div>
              <div className="text-xs text-white/60 text-[#3e2c1c]">Florida</div>
            </div>
            </div>
            <Button
              onClick={scrollToInquiry}
              className="shrink-0 bg-[#2f5d50] hover:bg-emerald-500/90 text-white font-extrabold"
            >
              Request Info
            </Button>
          </div>
        </div>
      </div>
  );
}