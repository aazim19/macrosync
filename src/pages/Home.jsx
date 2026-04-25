import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesStrip from "../components/landing/FeaturesStrip";
import CoursesSection from "../components/landing/CoursesSection";
import JourneySection from "../components/landing/JourneySection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import GallerySection from "../components/landing/GallerySection";
import ContactFooter from "../components/landing/ContactFooter";

const IMAGES = {
  hero: "https://media.base44.com/images/public/69e7b4bcd53014a7c7dc3df9/5ed156b7b_generated_e21ea832.png",
  road: "https://media.base44.com/images/public/69e7b4bcd53014a7c7dc3df9/6058931c5_generated_a250b275.png",
  steering: "https://media.base44.com/images/public/69e7b4bcd53014a7c7dc3df9/3db18c525_generated_1806bc51.png",
  portrait: "https://media.base44.com/images/public/69e7b4bcd53014a7c7dc3df9/f8071d3f4_generated_9f469026.png",
  sunset: "https://media.base44.com/images/public/69e7b4bcd53014a7c7dc3df9/486adcc4e_generated_6827d868.png",
  dashboard: "https://media.base44.com/images/public/69e7b4bcd53014a7c7dc3df9/537e82325_generated_df4f897d.png",
};

export default function Home() {
  const galleryImages = [
    { src: IMAGES.sunset, alt: "Florida sunset highway with palm trees" },
    { src: IMAGES.steering, alt: "Premium car steering wheel detail" },
    { src: IMAGES.dashboard, alt: "Modern car dashboard display" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <FeaturesStrip />
      <CoursesSection />
      <JourneySection roadImage={IMAGES.road} />
      <TestimonialsSection portraitImage={IMAGES.portrait} />
      <GallerySection images={galleryImages} />
      <ContactFooter />
    </div>
  );
}