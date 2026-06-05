const trustItems = [
  "Response within 24–48 hours",
  "Shortlist tailored to your budget + preferences",
  "No spam—only relevant lot options",
];

const testimonials = [
  {
    name: "Susan M.",
    title: "Daughter, Tampa, FL",
    desc: "“Dad slipped twice getting into the old tub. Since AquaSafe installed his walk-in tub, we are not afraid of another fall or injury.”",
  },
  {
    name: "Robert H.",
    title: "Naples, FL",
    desc: "“I was scared every time I bathed. Now I walk right in. I feel safe, and my kids worry less You’ll know what’s next—without confusion.”",
  },
  {
    name: "Patricia L.",
    title: "Orlando, FL",
    desc: "“They explained how it prevents falls without pressure. Professional install, and no injuries since.”",
  },
  {
    name: "Patricia L.",
    title: "Orlando, FL",
    desc: "“They explained how it prevents falls without pressure. Professional install, and no injuries since.”",
  },
];

export default function Trusted() {
  return (
    <section id="trusted" className="border-b border-[#3C2F2F]/15 bg-[#FEFAF6]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="text-left lg:col-span-5">
            <div className="border-t border-[#3C2F2F] pt-5 text-xs font-black uppercase tracking-[0.28em] text-[#588157]">
              Trusted Process
            </div>
            <h2 className="mt-8 text-[clamp(2.5rem,5vw,5.25rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#3C2F2F]">
              A clear process from inquiry to next steps
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#3C2F2F]/75">
              We make it easy to understand what’s available and what you can do
              next. Our goal is to help you make a confident decision.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid border border-[#3C2F2F]/20 md:grid-cols-3">
              {trustItems.map((item, index) => (
                <div
                  key={item}
                  className="border-b border-[#3C2F2F]/20 bg-[#FAEDCD] p-6 text-left last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <div className="text-xs font-black text-[#588157]">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <p className="mt-8 text-base font-black leading-6 text-[#3C2F2F]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 border border-[#3C2F2F]/20 md:grid-cols-2">
              {testimonials.map((item, index) => (
                <figure
                  key={`${item.name}-${index}`}
                  className="border-b border-[#3C2F2F]/20 p-6 text-left last:border-b-0 md:border-r md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <blockquote className="min-h-36 text-base leading-7 text-[#3C2F2F]/80">
                    {item.desc}
                  </blockquote>
                  <figcaption className="mt-8 border-t border-[#3C2F2F]/15 pt-4">
                    <div className="text-sm font-black uppercase tracking-[0.18em] text-[#3C2F2F]">
                      {item.name}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[#588157]">
                      {item.title}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
