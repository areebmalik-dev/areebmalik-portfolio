"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Bot,
  Linkedin,
  FileSpreadsheet,
  Workflow,
  MessageSquare,
  Sparkles,
  Code2,
  Palette,
  User,
} from "lucide-react";
import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";

const skills = [
  { icon: Code2, label: "Next.js / React", color: "from-white/80 to-gray-400" },
  {
    icon: Workflow,
    label: "n8n Automation",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp Bots",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn Automation",
    color: "from-blue-500 to-cyan-500",
  },
  { icon: Bot, label: "AI Workflows", color: "from-primary to-secondary" },
  {
    icon: FileSpreadsheet,
    label: "Google Sheets",
    color: "from-green-600 to-teal-500",
  },
  {
    icon: Sparkles,
    label: "OpenAI / GPT",
    color: "from-purple-500 to-pink-500",
  },
  { icon: Palette, label: "Tailwind CSS", color: "from-cyan-400 to-blue-500" },
];

const titles = [
  "AI Automation Engineer",
  "Full Stack Developer",
  "Next.js Developer",
  "AI Workflow Developer",
  "SaaS Developer",
];

export function AboutSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      const currentTitle = titles[titleIndex];
      const typingSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && displayText === currentTitle) {
        // Pause at the end of typing
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        // Switch to next title after deletion
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        // Continue typing or deleting
        const nextText = isDeleting
          ? currentTitle.substring(0, displayText.length - 1)
          : currentTitle.substring(0, displayText.length + 1);

        timeout = setTimeout(() => setDisplayText(nextText), typingSpeed);
      }
    };

    timeout = setTimeout(handleTyping, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Background Orbs for this section */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <TiltCard degree={10} className="relative z-10">
              <div className="relative group">
                {/* Glow Effects */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

                <div className="relative glass-card rounded-2xl overflow-hidden aspect-[4/5] border border-white/10">
                  <Image
                    src="/Areeb Profile.webp"
                    alt="Areeb Malik"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />

                  {/* Glass Overlay on bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 glass-morphism border-t border-white/20 z-20">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-12 h-12 rounded-full bg-background/50 flex items-center justify-center border border-white/10 backdrop-blur-md">
                          <User className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-bold text-lg text-foreground tracking-tight">
                          Areeb Malik
                        </h4>
                        <div className="flex items-center gap-1">
                          <p className="text-[10px] font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                            {displayText}
                          </p>
                          <motion.span
                            animate={{ opacity: [1, 1, 0, 0] }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              ease: "linear",
                              times: [0, 0.5, 0.5, 1],
                            }}
                            className="w-[2px] h-3 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right content - Text & Skills */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary font-medium mb-4">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Building the <span className="text-gradient">Future</span> of
                Automation
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg mb-10 leading-relaxed">
                <p>
                  I&apos;m{" "}
                  <strong className="text-foreground">Areeb Malik</strong>, a
                  dedicated professional at the intersection of
                  <span className="text-primary font-medium">
                    {" "}
                    AI Automation and Full Stack Engineering
                  </span>
                  . I specialize in crafting systems that don&apos;t just
                  work—they think and evolve.
                </p>
                <p>
                  With a focus on{" "}
                  <strong className="text-foreground">
                    n8n, Next.js, and Generative AI
                  </strong>
                  , I build bridges between complex data and intuitive user
                  experiences. My goal is to eliminate repetitive tasks and
                  unlock human creativity through intelligent technology.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="relative glass-card rounded-3xl p-6 lg:p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Core Expertise
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 hover:bg-background/80 transition-all border border-transparent hover:border-primary/30">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}
                        >
                          <skill.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium">
                          {skill.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
