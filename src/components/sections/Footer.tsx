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

export default function Footer() {
  return (
    <footer className="bg-[#3C2F2F] text-left text-[#FEFAF6]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#" className="inline-flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center border border-[#FEFAF6]/40 bg-[#FEFAF6]">
                <img src={Logo} alt="Florida Lots logo" className="h-9 w-9 object-contain" />
              </span>
              <span>
                <span className="block text-sm font-black uppercase tracking-[0.24em]">
                  Lots For Sale
                </span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A373]">
                  Florida
                </span>
              </span>
            </a>

            <p className="mt-8 max-w-md text-base leading-7 text-[#FEFAF6]/70">
              Residential and investment lot opportunities curated around
              your preferred Florida region, budget, and timeline.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-none bg-[#D4A373] px-5 text-xs font-black uppercase tracking-[0.18em] text-[#3C2F2F] hover:bg-[#FAEDCD]"
              >
                <a href="#inquiry">Request Current Options</a>
              </Button>
              <a
                href="#opportunities"
                className="inline-flex h-12 items-center justify-center border border-[#FEFAF6]/35 px-5 text-xs font-black uppercase tracking-[0.18em] text-[#FEFAF6] transition-colors hover:border-[#D4A373] hover:text-[#D4A373]"
              >
                View Opportunities
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="border-t border-[#FEFAF6]/35 pt-5 text-xs font-black uppercase tracking-[0.24em] text-[#D4A373]">
              Quick links
            </div>
            <ul className="mt-6 space-y-4 text-sm text-[#FEFAF6]/70">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a className="transition-colors hover:text-[#D4A373]" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-[#D4A373]"
                  onClick={(event) => event.preventDefault()}
                >
                  Terms & Disclosures
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="border-t border-[#FEFAF6]/35 pt-5 text-xs font-black uppercase tracking-[0.24em] text-[#D4A373]">
              What we help with
            </div>
            <ul className="mt-6 divide-y divide-[#FEFAF6]/15 border-y border-[#FEFAF6]/15">
              {serviceHighlights.map((item) => (
                <li key={item} className="grid grid-cols-[1.25rem_1fr] gap-3 py-4 text-sm text-[#FEFAF6]/75">
                  <span className="font-black text-[#D4A373]">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border border-[#FEFAF6]/20 p-4 text-xs leading-6 text-[#FEFAF6]/60">
              Availability, pricing, and terms may change. We contact you only
              about lot opportunities that fit your request.
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-[#FEFAF6]/20" />

        <div className="flex flex-col gap-3 text-xs text-[#FEFAF6]/50 md:flex-row md:items-center md:justify-between">
          <div>
            &copy; {new Date().getFullYear()} Florida Lots. All rights reserved.
          </div>
          <div>Privacy Policy | Cookie Policy | Legal</div>
        </div>
      </div>
    </footer>
  );
}
