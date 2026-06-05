import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";
import { scrollToInquiry } from "@/lib/scroll";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#3C2F2F]/15 bg-[#FEFAF6]">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-6 px-5 py-4 sm:px-8 lg:grid-cols-12 lg:px-10">
        <a
          href="#"
          className="flex min-w-0 items-center gap-4 lg:col-span-5"
          aria-label="Florida Lots For Sale home"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#3C2F2F] bg-white">
            <img src={Logo} alt="Florida Lots logo" className="h-8 w-8 object-contain" />
          </span>
          <span className="min-w-0 text-left">
            <span className="block truncate text-sm font-black uppercase tracking-[0.24em] text-[#3C2F2F]">
              Lots For Sale
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#588157]">
              Florida
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.22em] text-[#3C2F2F]/70 lg:col-span-4 lg:flex">
          <a className="transition-colors hover:text-[#588157]" href="#opportunities">
            Opportunity Types
          </a>
          <a className="transition-colors hover:text-[#588157]" href="#trusted">
            Trusted Process
          </a>
        </nav>

        <div className="lg:col-span-3 lg:flex lg:justify-end">
          <Button
            onClick={scrollToInquiry}
            className="h-11 rounded-none border border-[#3C2F2F] bg-[#3C2F2F] px-4 text-xs font-black uppercase tracking-[0.18em] text-[#FEFAF6] hover:bg-[#588157] sm:px-5"
          >
            Request Info
          </Button>
        </div>
      </div>
    </header>
  );
}
