import React from 'react'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { Checkbox } from "@/components/ui/checkbox";
import Inqurary from "@/assets/inquray.jpg"

function inquiry() {

     const [privacyOk, setPrivacyOk] = React.useState(true);
  return (
     <section id="inquiry" className="relative bg-[#cdaa7d]">
      <div className="absolute bottom-0 left-0 w-full h-16">
   <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[#e8d5b7] via-[#d2b48c]/60 to-transparent backdrop-blur-0" />
   </div>
        <div className="mx-auto px-28 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className='mt-9 '>
              <div className="text-sm font-extrabold text-[#2f5d50] tracking-wide">
                REQUEST INFORMATION
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold px-2 text-white">
                Submit an inquiry to get current lot options
              </h2>
              <p className="mt-3 text-white/70 leading-7 text-[#3e2c1c]">
                Fill this form and we’ll respond with a curated shortlist based on
                your goals, budget range, and preferred area in Florida.
              </p>

            <img src={Inqurary} alt="" className='rounded-2xl mt-10'/>
            </div>

            <Card className="rounded-2xl border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 md:p-7 backdrop-blur shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
              <form className="grid gap-4" action="#" method="post">
                <div className="grid gap-2">
                  <Label className="text-white/80">Full name</Label>
                  <Input
                    name="name"
                    placeholder="John Doe"
                    required
                    className="bg-black/20 border-white/15 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="grid gap-2">
                  <Label className="text-white/80">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="bg-black/20 border-white/15 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="grid gap-2">
                  <Label className="text-white/80">Phone (optional)</Label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+1 (___) ___-____"
                    className="bg-black/20 border-white/15 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="grid gap-2">
                  <Label className="text-white/80">I’m interested in</Label>
                  <Select name="interest">
                    <SelectTrigger className="bg-black/20 border-white/15 text-white">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-950 text-white border-white/10">
                      <SelectItem value="residential">Residential lots</SelectItem>
                      <SelectItem value="investment">Investment lots</SelectItem>
                      <SelectItem value="either">Either</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label className="text-white/80">Budget range</Label>
                  <Select name="budget">
                    <SelectTrigger className="bg-black/20 border-white/15 text-white">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-950 text-white border-white/10">
                      <SelectItem value="under50">Under $50k</SelectItem>
                      <SelectItem value="50to100">$50k–$100k</SelectItem>
                      <SelectItem value="100to250">$100k–$250k</SelectItem>
                      <SelectItem value="250plus">$250k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label className="text-white/80">Preferred location (optional)</Label>
                  <Input
                    name="location"
                    placeholder="City / region in CA"
                    className="bg-black/20 border-white/15 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="grid gap-2">
                  <Label className="text-white/80">Notes (optional)</Label>
                  <Textarea
                    name="notes"
                    placeholder="Timeline, must-haves, or investment goals..."
                    className="min-h-[96px] resize-none bg-black/20 border-white/15 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <Checkbox
                    checked={privacyOk}
                    onCheckedChange={(v) => setPrivacyOk(Boolean(v))}
                    className="mt-1 border-white/20"
                  />
                  <div className="text-sm text-[#3e2c1c] leading-6">
                    checking this box, I agree to the Privacy Policy and Terms of Use. I consent to receive calls and text messages from AquaSafe Walk-In Tubs Florida and its service partners at the number provided, including via automated technology. Message and data rates may apply. Consent is not required to purchase. I may revoke consent at any time. Privacy Policy · Terms of Use
                    {!privacyOk ? (
                      <div className="mt-1 text-xs text-[#2f5d50]">
                        Please confirm to submit.
                      </div>
                    ) : null}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!privacyOk}
                  className="w-full py-6 bg-emerald-500 hover:bg-emerald-500/90 text-black font-extrabold disabled:opacity-60 disabled:hover:bg-emerald-500"
                  size="lg"
                >
                  Submit Inquiry
                </Button>

                <div className="text-xs text-white/55 leading-5">
                  Disclaimer: Availability, pricing, and terms may change.
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>
  )
}
export default inquiry