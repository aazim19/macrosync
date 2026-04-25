import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const intentLinks = [
  { label: "Got a Ticket?", href: "#courses", desc: "Court-approved courses" },
  { label: "First License", href: "#courses", desc: "Teens & adults" },
  { label: "Lower Insurance?", href: "#courses", desc: "Defensive driving" },
  { label: "All Courses", href: "#courses", desc: null },
  { label: "Support", href: "#contact", desc: null },
];

const LOGO = "https://media.base44.com/images/public/69e7b4bcd53014a7c7dc3df9/80f54cfa2_69bdd27fad14007d4aa6fa67.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? "bg-primary shadow-xl" : "bg-primary/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img src={LOGO} alt="America's Traffic School logo" className="h-12 w-12 object-contain" />
            <div className="hidden sm:block">
              <div className="font-display text-white text-sm leading-tight">America's</div>
              <div className="font-display text-white text-sm leading-tight">Traffic School</div>
            </div>
          </a>

          {/* Desktop intent links */}
          <div className="hidden lg:flex items-center">
            {intentLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group px-4 py-3 flex flex-col items-center hover:bg-white/10 rounded-xl transition-all duration-200"
              >
                <span className="text-sm font-semibold text-white group-hover:text-yellow-300 transition-colors whitespace-nowrap">
                  {link.label}
                </span>
                {link.desc && (
                  <span className="text-[10px] text-white/40 whitespace-nowrap mt-0.5">
                    {link.desc}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+13213823869"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-yellow-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (321) 382-3869
            </a>
            <a href="#courses">
              <Button className="bg-yellow-400 text-primary hover:bg-yellow-300 font-bold rounded-full px-5 text-sm h-9 shadow-md">
                Find My Course
              </Button>
            </a>
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {intentLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-white/8 group"
                >
                  <div>
                    <span className="block font-semibold text-white group-hover:text-yellow-300 transition-colors text-sm">
                      {link.label}
                    </span>
                    {link.desc && (
                      <span className="text-xs text-white/40">{link.desc}</span>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/30" />
                </a>
              ))}
              <a
                href="tel:+13213823869"
                className="flex items-center gap-2 text-yellow-300 font-semibold pt-4 text-sm"
              >
                <Phone className="w-4 h-4" />
                (321) 382-3869
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}