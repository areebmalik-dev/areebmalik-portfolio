"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play, Workflow, Clock, Cpu, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TiltCard } from "@/components/ui/tilt-card"
import { useRef } from "react"

const stats = [
  { icon: Workflow, value: "150+", label: "Workflows Built" },
  { icon: Clock, value: "10,000+", label: "Hours Saved" },
  { icon: Cpu, value: "50+", label: "AI Integrations" },
  { icon: Code2, value: "30+", label: "Web Projects" },
]

function FloatingOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 1 }}
      className={`absolute rounded-full blur-3xl animate-pulse-glow ${className}`}
    />
  )
}

function FloatingCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <TiltCard degree={20}>
      <div className="glass-card rounded-xl p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </TiltCard>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Floating orbs */}
      <FloatingOrb className="w-[500px] h-[500px] bg-primary/20 -top-32 -left-32" delay={0} />
      <FloatingOrb className="w-96 h-96 bg-secondary/20 top-1/4 -right-20" delay={0.2} />
      <FloatingOrb className="w-72 h-72 bg-accent/20 bottom-20 left-1/4" delay={0.4} />
      <FloatingOrb className="w-64 h-64 bg-primary/15 bottom-32 right-1/4" delay={0.6} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Floating UI cards - decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-32 left-[10%] hidden lg:block">
          <FloatingCard delay={0.8}>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground">n8n Workflow Active</span>
            </div>
          </FloatingCard>
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="absolute top-48 right-[8%] hidden lg:block">
          <FloatingCard delay={1}>
            <div className="flex items-center gap-2 text-sm">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Next.js App Deployed</span>
            </div>
          </FloatingCard>
        </motion.div>
        
        <motion.div style={{ y: y3 }} className="absolute bottom-40 left-[15%] hidden lg:block">
          <FloatingCard delay={1.2}>
            <div className="flex items-center gap-2 text-sm">
              <Cpu className="h-4 w-4 text-secondary" />
              <span className="text-muted-foreground">AI Processing...</span>
            </div>
          </FloatingCard>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm text-muted-foreground">AI Automation Engineer & Full Stack Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance"
          >
            <span className="text-foreground">Building AI-Powered</span>
            <br />
            <span className="text-gradient">Automation Systems</span>
            <br />
            <span className="text-foreground">& Modern Web Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty"
          >
            I create AI workflows, automation systems, modern SaaS applications, and scalable 
            full stack solutions using Next.js, Python, AI tools, and n8n.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="#projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-purple group px-8">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#workflows">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 group px-8">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Explore Workflows
              </Button>
            </Link>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <TiltCard degree={15} className="h-full">
                  <div className="glass-card rounded-2xl p-5 group cursor-default h-full">
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
