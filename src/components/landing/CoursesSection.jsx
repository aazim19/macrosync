import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Globe, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    title: "6-Hour DETS – Drug, Alcohol & Traffic Safety",
    tag: "Ages 14–17",
    bilingual: false,
    duration: "6 Hours",
    desc: "State-approved online program educating teen drivers on drugs, alcohol, and risky behaviors behind the wheel.",
    includes: ["Drug & Alcohol Education", "Traffic Safety Training", "Online Only for Under 18"],
    featured: false,
  },
  {
    title: "4-Hour TLSAE – First-Time Driver Course",
    tag: "Ages 18+",
    bilingual: false,
    duration: "4 Hours",
    desc: "State-required program for all first-time license applicants under Florida Statute 322.095. Complete entirely online.",
    includes: ["Traffic Law Education", "Substance Abuse Awareness", "FLHSMV Mandated"],
    featured: false,
  },
  {
    title: "DETS First-Time Driver Package",
    tag: "Ages 14–17",
    bilingual: true,
    duration: "Complete Bundle",
    desc: "Everything new drivers need. Includes the 6-Hour DETS, the official FL Online Permit Exam, plus a bonus practice exam.",
    includes: ["6-Hour DETS Course", "Official FL Permit Exam", "Bonus Practice Exam"],
    featured: true,
  },
  {
    title: "Official FL Class E Knowledge Exam",
    tag: "Ages 14–17",
    bilingual: true,
    duration: "60 min · 50 questions",
    desc: "The official Florida learner's permit exam, taken online. Score 80%+ to qualify for your permit.",
    includes: ["Official State Exam", "Fully Online", "Instant Results"],
    featured: false,
  },
  {
    title: "Permit Practice Test",
    tag: "All Ages",
    bilingual: true,
    duration: "Under 60 min",
    desc: "Get comfortable with real exam-style questions. Review your answers and learn from mistakes before test day.",
    includes: ["Exam-Style Questions", "Answer Review", "Boosts Pass Rates"],
    featured: false,
  },
];

function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`relative rounded-2xl border flex flex-col overflow-hidden transition-all duration-300 ${
        course.featured
          ? "bg-primary border-primary shadow-2xl ring-2 ring-primary"
          : "bg-white border-gray-200 hover:border-primary/40 hover:shadow-lg"
      }`}
    >
      {course.featured && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-primary text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1">
          <Star className="w-3 h-3 fill-primary" /> Most Popular
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-xs font-semibold rounded-full px-3 py-1 border ${
            course.featured
              ? "bg-white/15 text-white border-white/20"
              : "bg-secondary text-primary border-primary/20"
          }`}>
            {course.tag}
          </span>
          {course.bilingual && (
            <span className={`text-xs font-semibold rounded-full px-3 py-1 flex items-center gap-1 ${
              course.featured
                ? "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
                : "bg-yellow-50 text-yellow-700 border border-yellow-200"
            }`}>
              <Globe className="w-3 h-3" /> EN / ES
            </span>
          )}
        </div>

        <h3 className={`font-display text-lg leading-snug mb-3 ${course.featured ? "text-white" : "text-gray-900"}`}>
          {course.title}
        </h3>

        <p className={`text-sm leading-relaxed mb-5 flex-1 ${course.featured ? "text-white/60" : "text-gray-500"}`}>
          {course.desc}
        </p>

        <div className="space-y-2 mb-6">
          {course.includes.map((item, i) => (
            <div key={i} className={`flex items-center gap-2 text-sm ${course.featured ? "text-white/70" : "text-gray-600"}`}>
              <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${course.featured ? "text-yellow-300" : "text-primary"}`} />
              {item}
            </div>
          ))}
        </div>

        <div className={`flex items-center gap-1.5 text-xs mb-6 ${course.featured ? "text-white/40" : "text-gray-400"}`}>
          <Clock className="w-3.5 h-3.5" />
          {course.duration}
        </div>

        <a href="#contact">
          <Button
            className={`w-full rounded-full font-semibold ${
              course.featured
                ? "bg-yellow-400 text-primary hover:bg-yellow-300 shadow-lg"
                : "bg-primary text-white hover:bg-primary/90"
            }`}
            aria-label={`Register for ${course.title}`}
          >
            Register Now <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
}

export default function CoursesSection() {
  const featured = courses.find((c) => c.featured);
  const rest = courses.filter((c) => !c.featured);

  return (
    <section id="courses" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Our Programs</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-3 tracking-tight">
            Choose Your Course
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            State-approved online driver education programs for new Florida drivers. Available in English and Spanish.
          </p>
        </motion.div>

        {/* Featured course full-width */}
        <div className="mb-6">
          <CourseCard course={featured} index={0} />
        </div>

        {/* Rest in 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((course, i) => (
            <CourseCard key={i} course={course} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}