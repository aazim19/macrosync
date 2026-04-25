import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, Clock, Globe } from "lucide-react";

export default function CourseCard({ course, index, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${
        featured
          ? "bg-primary text-primary-foreground ring-2 ring-accent shadow-2xl shadow-accent/10"
          : "bg-card text-card-foreground border border-border hover:shadow-xl hover:border-accent/30"
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-accent text-accent-foreground text-xs font-bold px-5 py-2 rounded-bl-2xl flex items-center gap-1.5">
            <Star className="w-3 h-3" />
            Most Popular
          </div>
        </div>
      )}

      <div className="p-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {course.ageGroup && (
            <Badge
              variant="outline"
              className={`text-xs rounded-full ${
                featured
                  ? "border-primary-foreground/20 text-primary-foreground/70"
                  : "border-border text-muted-foreground"
              }`}
            >
              {course.ageGroup}
            </Badge>
          )}
          {course.bilingual && (
            <Badge
              className={`text-xs rounded-full ${
                featured
                  ? "bg-accent/20 text-accent border-accent/30"
                  : "bg-teal/10 text-teal border-teal/20"
              }`}
            >
              <Globe className="w-3 h-3 mr-1" />
              EN / ES
            </Badge>
          )}
        </div>

        <h3
          className={`font-display text-lg mb-3 tracking-tight leading-tight ${
            featured ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {course.title}
        </h3>

        <p
          className={`text-sm leading-relaxed mb-6 ${
            featured ? "text-primary-foreground/60" : "text-muted-foreground"
          }`}
        >
          {course.description}
        </p>

        {course.includes && (
          <div className="mb-6 space-y-2">
            {course.includes.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 text-sm ${
                  featured ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        )}

        {course.duration && (
          <div
            className={`flex items-center gap-2 text-sm mb-6 ${
              featured ? "text-primary-foreground/50" : "text-muted-foreground"
            }`}
          >
            <Clock className="w-4 h-4" />
            {course.duration}
          </div>
        )}

        <a href="#contact">
          <Button
            className={`w-full rounded-full font-semibold ${
              featured
                ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            Register Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
}