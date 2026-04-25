import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileCheck, Car } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    label: "Step 1",
    title: "Safer Driving",
    subtitle: "Complete Your Course",
    description:
      "Take the state-approved online course from home. Learn essential traffic laws, safety techniques, and responsible driving habits.",
  },
  {
    icon: FileCheck,
    label: "Step 2",
    title: "Smarter Choices",
    subtitle: "Pass the Exam",
    description:
      "Take the official Florida permit exam online. 50 questions, 60 minutes. Score 80% or higher to qualify for your learner's permit.",
  },
  {
    icon: Car,
    label: "Step 3",
    title: "Hit the Road",
    subtitle: "Get Your Permit",
    description:
      "Once you pass, you'll be eligible for your Florida learner's permit and on your way to becoming a safe, responsible driver.",
  },
];

export default function JourneySection({ roadImage }) {
  return (
    <section id="journey" className="relative py-24 lg:py-32 overflow-hidden bg-primary">
      {/* Subtle background image */}
      <div className="absolute inset-0">
        <img src={roadImage} alt="Florida coastal highway" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-yellow-300 uppercase tracking-widest">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-4">
            Your Path to the <span className="text-yellow-300">Open Road</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mt-4 text-lg">
            Three simple steps from enrollment to your Florida learner's permit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white/8 border border-white/12 rounded-2xl p-8 hover:bg-white/12 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold text-yellow-300 uppercase tracking-wider">{step.label}</span>
              <h3 className="font-display text-xl text-white mt-2 mb-1">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}