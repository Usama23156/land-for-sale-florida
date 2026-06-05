import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/hero.jpg";
import { scrollToInquiry } from "@/lib/scroll";

export default function Hero() {
  return (
    <section className="border-b border-[#3C2F2F]/15 bg-[#FEFAF6]">
      <div className="mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-between px-5 py-16 sm:px-8 lg:col-span-7 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-7">
            <div className="border-t border-[#3C2F2F] pt-4 text-left text-xs font-black uppercase tracking-[0.28em] text-[#588157] lg:col-span-2">
              Current Florida Availability
            </div>
            <div className="lg:col-span-5">
              <h1 className="max-w-4xl text-left text-[clamp(3.75rem,10vw,8.5rem)] font-black uppercase leading-[0.86] tracking-[-0.08em] text-[#3C2F2F]">
                Buy the right lot in Florida with current availability
              </h1>
              <p className="mt-8 max-w-2xl text-left text-lg leading-8 text-[#3C2F2F]/75 md:text-xl">
                Tell us what you want We match you with available residential or
                investment lots and provide pricing location fit and next steps
                so you can move confidently
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 border-t border-[#3C2F2F]/20 pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="grid grid-cols-3 gap-4 text-left">
              {[
                ["01", "Residential"],
                ["02", "Investment"],
                ["03", "Flexible"],
              ].map(([index, label]) => (
                <div key={index} className="border-l border-[#D4A373] pl-3">
                  <div className="text-xs font-black text-[#588157]">{index}</div>
                  <div className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[#3C2F2F]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <Button
              onClick={scrollToInquiry}
              className="h-14 rounded-none bg-[#D4A373] px-7 text-sm font-black uppercase tracking-[0.18em] text-[#3C2F2F] hover:bg-[#588157] hover:text-white"
              size="lg"
            >
              Request Current Options
            </Button>
          </div>
        </div>

        <div className="relative min-h-[440px] border-t border-[#3C2F2F]/15 lg:col-span-5 lg:min-h-0 lg:border-l lg:border-t-0">
          <img
            src={HeroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3C2F2F]/10" />
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-white/70 bg-[#FEFAF6]/90 text-left backdrop-blur-sm">
            {["Region", "Budget", "Timeline"].map((item) => (
              <div key={item} className="border-r border-[#3C2F2F]/15 p-4 last:border-r-0">
                <div className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#588157]">
                  {item}
                </div>
                <div className="mt-2 text-sm font-bold text-[#3C2F2F]">
                  Preference-led
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
