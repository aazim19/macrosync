import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOGO = "https://media.base44.com/images/public/69e7b4bcd53014a7c7dc3df9/80f54cfa2_69bdd27fad14007d4aa6fa67.png";

export default function ContactFooter() {
  return (
    <>
      {/* CTA Band */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
              Start Your Journey <span className="text-yellow-300">Today</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
              Get started with our state-approved online driver education programs. Learn essential traffic laws, safety techniques, and responsible driving habits — all from home.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#courses">
                <Button size="lg" className="bg-yellow-400 text-primary hover:bg-yellow-300 rounded-full px-8 font-bold h-14 shadow-xl">
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="tel:+13213823869">
                <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold h-14 border-white/25 text-white bg-transparent hover:bg-white/10 hover:text-white">
                  <Phone className="w-5 h-5 mr-2" /> Call Us Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <img src={LOGO} alt="America's Traffic School" className="h-14 w-14 object-contain" />
                <div>
                  <div className="font-display text-white leading-tight">America's Traffic School</div>
                  <div className="text-xs text-white/40 mt-0.5">State-Approved Florida Driver Education</div>
                </div>
              </div>
              <p className="text-sm text-white/40 leading-relaxed max-w-sm mb-8">
                ATS provides state-approved online driver education and traffic safety courses in Florida. Simple, convenient, and fully accessible from home.
              </p>
              <a
                href="tel:+13213823869"
                className="inline-flex items-center gap-3 bg-primary/30 border border-primary/40 rounded-2xl px-5 py-4 hover:bg-primary/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider">Call Anytime</div>
                  <div className="font-display text-xl text-yellow-300 tracking-tight">(321) 382-3869</div>
                </div>
              </a>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">Programs</h4>
              <ul className="space-y-3">
                {["6-Hour DETS Course", "4-Hour TLSAE Course", "Official Permit Exam", "Practice Test", "Driver Packages"].map((item) => (
                  <li key={item}>
                    <a href="#courses" className="text-sm text-white/50 hover:text-yellow-300 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/50 leading-relaxed">
                    5923 Old Winter Garden Rd #119<br />Orlando, FL 32835
                  </span>
                </li>
                <li>
                  <a href="tel:+13213823869" className="flex items-center gap-3 text-white/50 hover:text-yellow-300 transition-colors">
                    <Phone className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                    <span className="text-sm">(321) 382-3869</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/50">
                  <Clock className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                  <span className="text-sm">24/7 Online Access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-white/20">© 2026 America's Traffic School. All Rights Reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="text-xs text-white/20 hover:text-yellow-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-white/20 hover:text-yellow-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}