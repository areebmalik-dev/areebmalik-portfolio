"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";

const screenshots = [
  {
    id: 1,
    title: "Marketplace E-Commerce Platform",
    description:
      "Modern marketplace platform with Firebase auth, Stripe payments, and Sanity-powered product management.",
    category: "Full Stack App",
    image: "/gallery/marketplace-ecommerce.png",
    gradient: "from-emerald-500/30 via-cyan-500/20 to-teal-500/30",
  },
  {
    id: 2,
    title: "AI-Powered Book Creation & RAG System",
    description:
      "AI-driven RAG platform with semantic search, Gemini AI, and vector database integration.",
    category: "AI Platform",
    image: "/gallery/ai-rag-system.png",
    gradient: "from-violet-500/30 via-fuchsia-500/20 to-purple-500/30",
  },
  {
    id: 3,
    title: "TaskFlow Pro",
    description:
      "Full-stack SaaS task manager with AI chatbot, JWT authentication, and Docker deployment.",
    category: "SaaS Application",
    image: "/gallery/taskflow-pro.png",
    gradient: "from-cyan-500/30 via-blue-500/20 to-indigo-500/30",
  },
  {
    id: 4,
    title: "Interactive Birthday Celebration App",
    description:
      "Interactive birthday app with balloons, ribbons, candle animations, and celebration effects.",
    category: "Interactive Web App",
    image: "/gallery/birthday-app.png",
    gradient: "from-pink-500/30 via-rose-500/20 to-purple-500/30",
  },
  {
    id: 5,
    title: "Whitepace SaaS Landing Page",
    description:
      "Pixel-perfect responsive SaaS landing page developed from a professional Figma design.",
    category: "Frontend Development",
    image: "/gallery/whitepace-saas.png",
    gradient: "from-blue-500/30 via-indigo-500/20 to-sky-500/30",
  },
  {
    id: 6,
    title: "Governor Sindh Website Clone",
    description:
      "Responsive frontend recreation of the Governor Sindh education program website.",
    category: "Frontend Clone",
    image: "/gallery/governor-sindh-clone.png",
    gradient: "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
  },
  {
    id: 7,
    title: "Modern Blog Platform UI",
    description:
      "Dark-themed responsive blog platform UI prepared for future CMS and backend integration.",
    category: "Frontend Development",
    image: "/gallery/blog-platform.png",
    gradient: "from-red-500/30 via-orange-500/20 to-pink-500/30",
  },
  {
    id: 8,
    title: "Editable Resume Builder",
    description:
      "Customizable resume builder with dynamic editing and shareable resume functionality.",
    category: "Web App",
    image: "/gallery/resume-builder.png",
    gradient: "from-pink-500/30 via-rose-500/20 to-red-500/30",
  },
  {
    id: 9,
    title: "Real-Time Currency Converter",
    description:
      "Responsive currency converter with real-time exchange rate integration using REST APIs.",
    category: "Web App",
    image: "/gallery/currency-converter.png",
    gradient: "from-yellow-500/30 via-orange-500/20 to-amber-500/30",
  },
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevLightbox = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-medium mb-4">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Project <span className="text-gradient">Screenshots</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A visual showcase of web projects and automation workflows.
          </p>
        </motion.div>

        {/* Main carousel */}
        <TiltCard degree={5} className="relative max-w-4xl mx-auto mb-8">
        <div className="relative aspect-video glass-card rounded-2xl overflow-hidden border border-white/10">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-br ${screenshots[currentIndex].gradient} flex items-center justify-center cursor-pointer group`}
                onClick={() => openLightbox(currentIndex)}
              >
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-8 left-8 w-32 h-32 border border-white/20 rounded-xl rotate-12" />
                  <div className="absolute bottom-8 right-8 w-24 h-24 border border-white/20 rounded-xl -rotate-12" />
                  <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/20 rounded-full" />
                  <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-white/20 rounded-lg rotate-45" />
                </div>

                <div className="relative w-full h-full group">
                  <Image
                    src={screenshots[currentIndex].image}
                    alt={screenshots[currentIndex].title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium glass text-primary mb-3">
                      {screenshots[currentIndex].category}
                    </span>

                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {screenshots[currentIndex].title}
                    </h3>

                    <p className="text-white/80">
                      {screenshots[currentIndex].description}
                    </p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-full glass text-sm font-medium flex items-center gap-2 border border-white/10">
                    <ZoomIn className="h-4 w-4" />
                    Click to expand
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass hover:bg-primary/20 h-12 w-12 rounded-full border border-white/10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass hover:bg-primary/20 h-12 w-12 rounded-full border border-white/10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </TiltCard>

        {/* Thumbnail strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-4 sm:grid-cols-8 gap-3 max-w-4xl mx-auto"
        >
          {screenshots.map((screenshot, index) => (
            <motion.button
              key={screenshot.id}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-video rounded-lg overflow-hidden transition-all duration-300 border ${
                index === currentIndex
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background border-primary/50"
                  : "opacity-60 hover:opacity-100 border-white/10"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={screenshot.image}
                  alt={screenshot.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors" />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video glass-card rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={screenshots[lightboxIndex].image}
                  alt={screenshots[lightboxIndex].title}
                  fill
                  className="object-contain bg-black"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium glass text-primary mb-4">
                    {screenshots[lightboxIndex].category}
                  </span>

                  <h3 className="text-3xl font-bold mb-3 text-white">
                    {screenshots[lightboxIndex].title}
                  </h3>

                  <p className="text-white/80">
                    {screenshots[lightboxIndex].description}
                  </p>
                </div>
              </div>
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 glass hover:bg-destructive/20 h-10 w-10 rounded-full border border-white/10"
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Navigation */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevLightbox}
                className="absolute left-4 top-1/2 -translate-y-1/2 glass hover:bg-primary/20 h-12 w-12 rounded-full border border-white/10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextLightbox}
                className="absolute right-4 top-1/2 -translate-y-1/2 glass hover:bg-primary/20 h-12 w-12 rounded-full border border-white/10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
