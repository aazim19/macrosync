import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2, Users, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustItems = [
  { icon: Shield, text: "Florida DHSMV-Approved" },
  { icon: CheckCircle2, text: "Accepted by Florida Courts" },
  { icon: Users, text: "10,000+ Drivers Served" },
  { icon: Globe, text: "English & Español" },
];

const steps = [
  { num: "01", title: "Complete Your Course", desc: "6-Hour DETS (teens 14–17) or 4-Hour TLSAE (adults 18+). 100% online, self-paced." },
  { num: "02", title: "Take the Exam", desc: "Official Florida permit exam — 50 questions, 60 minutes, score 80% to pass." },
  { num: "03", title: "Get Your Permit", desc: "Receive your certificate and head to the DMV for your learner's permit." },
];

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative bg-primary overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Right-side image panel (desktop) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%]">
        <img
          src={heroImage}
          alt="First-person view from car interior looking out at Florida road"
          className="w-full h-full object-cover"
        />
        {/* Gradient blending left edge into brand color */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #095eaf 0%, #095eaf 8%, rgba(9,94,175,0.6) 35%, rgba(9,94,175,0) 65%)",
          }}
        />
        {/* Gradient for bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #095eaf 0%, transparent 30%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center" style={{ minHeight: "100vh", paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8"
          >
            <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
            <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">
              State-Approved Online Driver Education
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6"
          >
            Florida-Approved Online Traffic School &amp; First-Time Driver Courses
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl"
          >
            Finish your required course 100% online, get your completion certificate, and satisfy Florida DMV or court requirements — without stepping into a classroom.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#courses">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 font-bold text-base h-14 shadow-xl"
              >
                Find My Course
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#courses">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 font-semibold text-base h-14 border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white"
              >
                View All Courses
              </Button>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {trustItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2"
              >
                <item.icon className="w-3.5 h-3.5 text-yellow-300 flex-shrink-0" />
                <span className="text-xs font-medium text-white/80">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3-step card — shown below on mobile, positioned bottom on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white/8 border border-white/12 rounded-2xl p-5 backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center mb-3">
                <span className="font-display text-xs text-primary">{step.num}</span>
              </div>
              <h4 className="font-semibold text-white text-sm mb-1.5">{step.title}</h4>
              <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}