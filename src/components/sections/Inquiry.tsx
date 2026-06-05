import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import InquiryImage from "@/assets/inquray.jpg";

const fieldClass =
  "h-12 rounded-none border-[#3C2F2F]/30 bg-[#FEFAF6] px-4 text-[#3C2F2F] placeholder:text-[#3C2F2F]/40 focus-visible:border-[#588157] focus-visible:ring-[#588157]/20";

export default function Inquiry() {
  const [privacyOk, setPrivacyOk] = useState(false);

  return (
    <section id="inquiry" className="border-b border-[#3C2F2F]/15 bg-[#D4A373]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="text-left lg:sticky lg:top-28 lg:col-span-5">
            <div className="border-t border-[#3C2F2F] pt-5 text-xs font-black uppercase tracking-[0.28em] text-[#3C2F2F]">
              Request Information
            </div>
            <h2 className="mt-8 text-[clamp(2.35rem,5vw,5rem)] font-black leading-[0.92] tracking-[-0.055em] text-[#3C2F2F]">
              Submit an inquiry to get current lot options
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#3C2F2F]/75">
              Fill this form and we’ll respond with a curated shortlist based on
              your goals, budget range, and preferred area in Florida.
            </p>

            <div className="mt-10 overflow-hidden border border-[#3C2F2F]/25">
              <img
                src={InquiryImage}
                alt=""
                aria-hidden="true"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </div>

          <div className="border border-[#3C2F2F] bg-[#FEFAF6] p-5 text-left sm:p-8 lg:col-span-7">
            <div className="mb-7 grid grid-cols-[auto_1fr] items-center gap-4 border-b border-[#3C2F2F]/20 pb-6">
              <div className="text-5xl font-black leading-none tracking-[-0.08em] text-[#588157]">
                01
              </div>
              <div>
                <div className="text-sm font-black uppercase tracking-[0.22em] text-[#3C2F2F]">
                  Inquiry Form
                </div>
                <p className="mt-1 text-sm leading-6 text-[#3C2F2F]/65">
                  Current lots, pricing context, and next steps.
                </p>
              </div>
            </div>

            <form className="grid gap-5" action="#" method="post">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-xs font-black uppercase tracking-[0.18em] text-[#3C2F2F]">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className={fieldClass}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-xs font-black uppercase tracking-[0.18em] text-[#3C2F2F]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone" className="text-xs font-black uppercase tracking-[0.18em] text-[#3C2F2F]">
                  Phone (optional)
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (___) ___-____"
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label className="text-xs font-black uppercase tracking-[0.18em] text-[#3C2F2F]">
                    I’m interested in
                  </Label>
                  <Select name="interest" required>
                    <SelectTrigger className={`${fieldClass} w-full`}>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-[#3C2F2F]/20 bg-[#FEFAF6] text-[#3C2F2F]">
                      <SelectItem value="residential">Residential lots</SelectItem>
                      <SelectItem value="investment">Investment lots</SelectItem>
                      <SelectItem value="either">Either</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label className="text-xs font-black uppercase tracking-[0.18em] text-[#3C2F2F]">
                    Budget range
                  </Label>
                  <Select name="budget" required>
                    <SelectTrigger className={`${fieldClass} w-full`}>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-[#3C2F2F]/20 bg-[#FEFAF6] text-[#3C2F2F]">
                      <SelectItem value="under50">Under $50k</SelectItem>
                      <SelectItem value="50to100">$50k–$100k</SelectItem>
                      <SelectItem value="100to250">$100k–$250k</SelectItem>
                      <SelectItem value="250plus">$250k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="location" className="text-xs font-black uppercase tracking-[0.18em] text-[#3C2F2F]">
                  Preferred location (optional)
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="City / region in CA"
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes" className="text-xs font-black uppercase tracking-[0.18em] text-[#3C2F2F]">
                  Notes (optional)
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Timeline, must-haves, or investment goals..."
                  className={`${fieldClass} min-h-32 resize-none py-3`}
                />
              </div>

              <div className="grid grid-cols-[1rem_1fr] gap-4 border border-[#3C2F2F]/25 bg-[#FAEDCD] p-4">
                <Checkbox
                  id="privacy"
                  checked={privacyOk}
                  onCheckedChange={(value) => setPrivacyOk(Boolean(value))}
                  className="mt-1 rounded-none border-[#3C2F2F]/40 data-checked:border-[#588157] data-checked:bg-[#588157]"
                />
                <div>
                  <Label htmlFor="privacy" className="block text-sm leading-6 text-[#3C2F2F]/75">
                    checking this box, I agree to the Privacy Policy and Terms of Use. I consent to receive calls and text messages from AquaSafe Walk-In Tubs Florida and its service partners at the number provided, including via automated technology. Message and data rates may apply. Consent is not required to purchase. I may revoke consent at any time. Privacy Policy · Terms of Use
                  </Label>
                  {!privacyOk ? (
                    <div className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-[#588157]">
                      Please confirm to submit.
                    </div>
                  ) : null}
                </div>
              </div>

              <Button
                type="submit"
                disabled={!privacyOk}
                className="h-14 w-full rounded-none bg-[#3C2F2F] text-sm font-black uppercase tracking-[0.2em] text-[#FEFAF6] hover:bg-[#588157] disabled:opacity-45 disabled:hover:bg-[#3C2F2F]"
                size="lg"
              >
                Submit Inquiry
              </Button>

              <div className="border-t border-[#3C2F2F]/15 pt-4 text-xs leading-5 text-[#3C2F2F]/60">
                Disclaimer: Availability, pricing, and terms may change.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
