import React from "react";
import { Shield, MonitorSmartphone, Clock, Globe, GraduationCap } from "lucide-react";

const features = [
  { icon: Shield, label: "Florida DHSMV-Approved" },
  { icon: MonitorSmartphone, label: "100% Online" },
  { icon: Clock, label: "Self-Paced" },
  { icon: Globe, label: "English & Español" },
  { icon: GraduationCap, label: "Certified Programs" },
];

export default function FeaturesStrip() {
  return (
    <section className="bg-primary border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <f.icon className="w-4 h-4 text-yellow-300 flex-shrink-0" />
              <span className="text-sm font-medium text-white/70">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}