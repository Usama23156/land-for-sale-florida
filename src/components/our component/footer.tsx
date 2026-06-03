import React from 'react'
import { Separator } from "@/components/ui/separator";

import Logo from "@/assets/logo.png"

function footer() {
  return (
    <div>
    <footer className=" text-white/80">
      <div className="mx-auto px-28  py-10">
     
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <div>
            <div className="text-base font-extrabold text-white">
              Florida Lots
            </div>
            <p className="mt-2 text-sm text-white/60 leading-6">
              Residential & investment lot opportunities. Submit an inquiry to
              receive available options.
            </p>
          </div>

          <div>
            <div className="text-sm font-extrabold text-white">Quick links</div>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>
                <a
                  href="#opportunities"
                  className="hover:text-white transition-colors"
                >
                  Opportunity Types
                </a>
              </li>
              <li>
                <a
                  href="#inquiry"
                  className="hover:text-white transition-colors"
                >
                  Request Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Terms & Disclosures
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold text-white">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-white/60">
              <div>General inquiries: (xxx) xxx-xxxx</div>
              <div>Email: info@example.com</div>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/60 leading-5">
              Disclaimer: Availability, pricing, and terms may change. No spam—
              we contact you only about lot opportunities that fit your request.
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-white/45">
            © {new Date().getFullYear()} California Lots. All rights reserved.
          </div>
          <div className="text-xs text-white/45">
            Privacy Policy • Cookie Policy • Legal
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default footer