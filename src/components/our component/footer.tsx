import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Opportunity Types", href: "#opportunities" },
  { label: "Trusted Process", href: "#trusted" },
  { label: "Request Info", href: "#inquiry" },
];

const serviceHighlights = [
  "Residential lot shortlists",
  "Investment-focused options",
  "Florida region matching",
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1f2d25] text-left text-white">
      <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#d2b48c]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur md:p-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.75fr_0.95fr]">
            <div>
              <a href="#" className="inline-flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <img src={Logo} alt="Florida Lots logo" className="h-9 w-9 object-contain" />
                </span>
                <span>
                  <span className="block text-lg font-extrabold">
                    Lots For Sale
                  </span>
                  <span className="block text-sm text-[#d2b48c]">Florida</span>
                </span>
              </a>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                Residential and investment lot opportunities curated around
                your preferred Florida region, budget, and timeline.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-11 rounded-full bg-emerald-500 px-5 font-extrabold text-black hover:bg-emerald-400"
                >
                  <a href="#inquiry">Request Current Options</a>
                </Button>
                <a
                  href="#opportunities"
                  className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 text-sm font-extrabold text-white transition-colors hover:bg-white/10"
                >
                  View Opportunities
                </a>
              </div>
            </div>

            <div>
              <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#d2b48c]">
                Quick links
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-white"
                    onClick={(e) => e.preventDefault()}
                  >
                    Terms & Disclosures
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#d2b48c]">
                What we help with
              </div>
              <ul className="mt-4 space-y-3">
                {serviceHighlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/75">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-200/30 bg-emerald-400/15 text-xs font-black text-emerald-100">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/15 px-4 py-4 text-xs leading-6 text-white/60">
                Availability, pricing, and terms may change. We contact you only
                about lot opportunities that fit your request.
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Florida Lots. All rights reserved.
          </div>
          <div className="text-xs text-white/50">
            Privacy Policy | Cookie Policy | Legal
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;