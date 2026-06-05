import { Button } from "@/components/ui/button";
import Opp1 from "@/assets/Opp1.jpg";
import Opp2 from "@/assets/Opp2.jpg";
import Opp3 from "@/assets/Opp3.jpg";
import { scrollToInquiry } from "@/lib/scroll";

const opportunityCards = [
  {
    title: "Residential Lots",
    eyebrow: "Build-ready guidance",
    description:
      "Explore homesite options with practical details on location fit, zoning basics, and next steps.",
    image: Opp1,
    bullets: [
      "Family-ready neighborhoods",
      "Zoning and utility basics",
      "Buyer guidance from inquiry to shortlist",
    ],
  },
  {
    title: "Investment Lots",
    eyebrow: "Long-term potential",
    description:
      "Compare land options that support portfolio goals with clear pricing context and timeline expectations.",
    image: Opp2,
    bullets: [
      "Investment-focused options",
      "Budget-aligned shortlists",
      "Next-step clarity before you commit",
    ],
  },
  {
    title: "Flexible Matches",
    eyebrow: "Not sure where to start?",
    description:
      "Share your priorities and we will match you with the Florida lot categories that fit best.",
    image: Opp3,
    bullets: [
      "Residential or investment fit",
      "Preferred region matching",
      "No-pressure recommendations",
    ],
  },
];

export default function Opportunities() {
  return (
    <section id="opportunities" className="border-b border-[#3C2F2F]/15 bg-[#FAEDCD]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 border-t border-[#3C2F2F] pt-6 lg:grid-cols-12">
          <div className="text-left text-xs font-black uppercase tracking-[0.28em] text-[#588157] lg:col-span-3">
            Opportunity types
          </div>
          <div className="lg:col-span-7">
            <h2 className="max-w-4xl text-left text-[clamp(2.5rem,6vw,5.75rem)] font-black leading-[0.92] tracking-[-0.055em] text-[#3C2F2F]">
              Available land opportunities in Florida
            </h2>
            <p className="mt-6 max-w-3xl text-left text-lg leading-8 text-[#3C2F2F]/75">
              Choose the path that fits your goals. Send us your preferences and
              we will match you with current lots, pricing context, and the next
              steps to review confidently.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 border border-[#3C2F2F]/20 bg-[#FEFAF6] lg:grid-cols-3">
          {opportunityCards.map((card, index) => (
            <article
              key={card.title}
              className="grid min-h-full grid-rows-[260px_1fr] border-b border-[#3C2F2F]/20 text-left last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div className="relative overflow-hidden border-b border-[#3C2F2F]/20">
                <img
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 bg-[#FEFAF6] px-3 py-2 text-xs font-black text-[#3C2F2F]">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
              </div>

              <div className="flex flex-col p-6 md:p-8">
                <div className="text-xs font-black uppercase tracking-[0.22em] text-[#588157]">
                  {card.eyebrow}
                </div>
                <h3 className="mt-5 text-3xl font-black uppercase leading-none tracking-[-0.04em] text-[#3C2F2F]">
                  {card.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[#3C2F2F]/75">
                  {card.description}
                </p>

                <ul className="mt-8 space-y-0 border-t border-[#3C2F2F]/15">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="grid grid-cols-[1.25rem_1fr] gap-3 border-b border-[#3C2F2F]/15 py-4 text-sm font-semibold leading-6 text-[#3C2F2F]"
                    >
                      <span className="font-black text-[#D4A373]">+</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-y border-[#3C2F2F] py-7 text-left md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-sm font-black uppercase tracking-[0.24em] text-[#588157]">
              Need a tailored shortlist?
            </div>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#3C2F2F]/75">
              Tell us your budget, preferred region, and timeline. We will
              send current Florida lot options that fit your request.
            </p>
          </div>
          <Button
            onClick={scrollToInquiry}
            className="h-14 rounded-none bg-[#3C2F2F] px-7 text-sm font-black uppercase tracking-[0.18em] text-[#FEFAF6] hover:bg-[#588157]"
          >
            Request Current Options
          </Button>
        </div>
      </div>
    </section>
  );
}
