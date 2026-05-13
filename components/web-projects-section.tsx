"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ExternalLink,
  Github,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projectCategories = [
  "All",
  "Web Apps",
  "SaaS",
  "Dashboards",
  "E-commerce",
  "AI Apps",
];

const projects = [
  {
    id: 1,
    title: "Avion - Marketplace E-Commerce Platform",
    description:
      "A modern full-stack marketplace e-commerce platform built with Next.js 15, featuring secure Firebase authentication, Sanity-powered product management, Stripe payment integration, and a fully responsive shopping experience. Includes protected admin access, dynamic product management, and seamless frontend performance optimized for scalability.",
    category: "E-Commerce",
    image: "/projects/marketplace-ecommerce.png",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Auth",
      "Sanity",
      "Stripe",
      "EmailJS",
    ],
    liveUrl: "https://areeb-marketplace-ecommerce-with-admin-panel.vercel.app/",
    githubUrl:
      "https://github.com/areebmalik-dev/Marketplace-e-commerce-with-admin-panel",
    icon: ShoppingCart,
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Real-Time Currency Converter",
    description:
      "A responsive real-time currency conversion application built with JavaScript and REST APIs, providing accurate live exchange rates, dynamic currency calculations, and a clean user-friendly interface optimized for speed and usability.",
    category: "Web App",
    image: "/projects/currency-converter.png",
    techStack: ["HTML5", "CSS3", "JavaScript", "REST API"],
    liveUrl: "https://currencyconvertor-nu.vercel.app/",
    githubUrl: "https://github.com/areebmalik-dev/currency_convertor",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 3,
    title: "Editable Resume Builder",
    description:
      "A dynamic and customizable resume builder that allows users to edit resume sections in real time, personalize layouts, and generate shareable resume links through a clean and responsive user experience.",
    category: "Web App",
    image: "/projects/resume-builder.png",
    techStack: ["TypeScript", "HTML5", "CSS3"],
    liveUrl: "https://areebresume-milestone-5.vercel.app/",
    githubUrl: "https://github.com/areebmalik-dev/resume_milestone-5",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 4,
    title: "AI-Powered Book Creation & RAG System",
    description:
      "A full-stack AI-powered book creation and Retrieval-Augmented Generation (RAG) platform built with FastAPI, Google Gemini, Qdrant vector database, and Docusaurus. Features intelligent semantic search, AI-assisted content generation, real-time chatbot interactions with source citations, and a modern responsive documentation interface optimized for scalable knowledge delivery.",
    category: "AI Platform",
    image: "/projects/ai-rag-system.png",
    techStack: [
      "FastAPI",
      "Google Gemini",
      "Qdrant",
      "PostgreSQL",
      "Docusaurus",
      "React",
      "Python",
      "Vercel",
    ],
    liveUrl: "https://ai-book-creation-guide.vercel.app/",
    githubUrl: "https://github.com/areebmalik-dev/ai-book-creation-guide",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    id: 5,
    title: "TaskFlow Pro",
    description:
      "A production-ready full-stack task management platform built with Next.js and FastAPI, featuring JWT authentication, AI-powered chatbot assistance, profile management, responsive dark/light themes, and Docker-based deployment architecture. Includes secure multi-user task management, OpenRouter AI integration with Mistral 7B, CI/CD workflows, and scalable backend infrastructure optimized for modern SaaS experiences.",
    category: "Full Stack SaaS",
    image: "/projects/taskflow-pro.png",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "JWT Auth",
      "Docker",
      "Tailwind CSS",
      "OpenRouter AI",
    ],
    liveUrl: "https://areeb-todo.vercel.app/login",
    githubUrl: "https://github.com/areebmalik-dev/Hackathon-II-2-3-4-5-phases",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 6,
    title: "Interactive Birthday Celebration App",
    description:
      "A modern interactive birthday celebration web application built with Next.js, featuring animated celebration effects, interactive candle lighting, balloon popping interactions, dynamic ribbons and confetti animations, and a responsive user experience designed to create personalized digital birthday moments.",
    category: "Interactive Web App",
    image: "/projects/birthday-app.png",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://birthdaywishapp-beta.vercel.app/",
    githubUrl: "https://github.com/areebmalik-dev/birthday_wish_app",
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    id: 7,
    title: "Whitepace SaaS Landing Page",
    description:
      "A modern fully responsive SaaS landing page built with Next.js and Tailwind CSS, developed from a detailed Figma design system with pixel-perfect responsiveness across desktop, tablet, and mobile devices. Focused on clean UI implementation, responsive layouts, scalable component structure, and modern SaaS-style user experience optimization.",
    category: "Frontend Development",
    image: "/projects/whitepace-saas.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
    liveUrl: "https://nextjs-class-assigment-05-whitepace-saas.vercel.app/",
    githubUrl:
      "https://github.com/areebmalik-dev/nextjs-class-assigment-05-whitepace-saas",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 8,
    title: "Governor Sindh Program Website Clone",
    description:
      "A fully responsive frontend clone of the Governor Sindh Education Program website built with modern frontend technologies, focused on pixel-perfect UI recreation, responsive layouts across all devices, and clean component-based implementation following real-world design structure and frontend development best practices.",
    category: "Frontend Development",
    image: "/projects/governor-sindh-clone.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://assigment-02-governor-website-clone.vercel.app/",
    githubUrl:
      "https://github.com/areebmalik-dev/assigment-02-governor_website_clone",
    gradient: "from-sky-500/20 to-blue-500/20",
  },
  {
    id: 9,
    title: "Modern Blog Platform UI",
    description:
      "A modern and fully responsive blog platform frontend built with Next.js, featuring a clean dark-themed UI, dynamic blog layout design, responsive content sections, and scalable architecture prepared for future backend and CMS integration. Designed to support automated blog publishing workflows and modern content-driven experiences.",
    category: "Frontend Development",
    image: "/projects/blog-platform.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://areeb-blog.vercel.app/",
    githubUrl: "https://github.com/areebmalik-dev/dynamic-blog",
    gradient: "from-red-500/20 to-orange-500/20",
  },
];

export function WebProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-medium mb-4">
            Web Development
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Modern, scalable web applications built with Next.js, TypeScript,
            and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground glow-purple"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full glass-card rounded-2xl overflow-hidden border border-transparent group-hover:border-primary/30 transition-all duration-500">
                  {/* Image area */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                  >
                    <div className="absolute inset-0">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top"
                        />
                      </motion.div>
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-medium glass text-primary border border-primary/20">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover overlay with buttons */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        asChild
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/50 hover:bg-primary/10"
                        asChild
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
