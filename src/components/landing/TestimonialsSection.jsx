import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection({ portraitImage }) {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-3 tracking-tight">
            Our Students Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gray-50 border border-gray-200 rounded-3xl p-10 lg:p-14">
            {/* Quote mark */}
            <div className="absolute -top-5 left-10">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-8 pt-2">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-10">
              "I completed my Florida traffic course here and it was amazing! The lessons were
              clear, simple, and easy to follow. I finished everything from home at my own pace.
              Highly recommended for anyone getting their license!"
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src={portraitImage}
                alt="Harlan Olson — ATS student"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <div className="font-semibold text-gray-900">Harlan Olson</div>
                <div className="text-sm text-gray-400">ATS Student</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}