"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, Linkedin, FileSpreadsheet, Workflow, MessageSquare, Sparkles, Code2, Palette } from "lucide-react"

const skills = [
  { icon: Code2, label: "Next.js / React", color: "from-white/80 to-gray-400" },
  { icon: Workflow, label: "n8n Automation", color: "from-orange-500 to-red-500" },
  { icon: MessageSquare, label: "WhatsApp Bots", color: "from-green-500 to-emerald-500" },
  { icon: Linkedin, label: "LinkedIn Automation", color: "from-blue-500 to-cyan-500" },
  { icon: Bot, label: "AI Workflows", color: "from-primary to-secondary" },
  { icon: FileSpreadsheet, label: "Google Sheets", color: "from-green-600 to-teal-500" },
  { icon: Sparkles, label: "OpenAI / GPT", color: "from-purple-500 to-pink-500" },
  { icon: Palette, label: "Tailwind CSS", color: "from-cyan-400 to-blue-500" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="inline-block text-primary font-medium mb-4"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">Areeb</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-4 text-muted-foreground text-lg"
            >
              <p>
                I&apos;m an <strong className="text-foreground">AI Automation Engineer & Full Stack Developer</strong> specializing 
                in building intelligent workflows and modern web applications that transform how businesses operate.
              </p>
              <p>
                With deep expertise in <strong className="text-foreground">n8n, Next.js, and AI integrations</strong>, I create 
                seamless automations and scalable applications that connect your tools and amplify your productivity.
              </p>
              <p>
                From WhatsApp chatbots that handle customer inquiries 24/7 to stunning SaaS dashboards and 
                e-commerce platforms, I deliver solutions that work tirelessly so you can focus on what matters most.
              </p>
              <p>
                My passion lies in bridging the gap between <strong className="text-foreground">AI capabilities and real-world 
                business needs</strong>. Whether it&apos;s automating your CRM, building a modern web app, or creating 
                complex multi-step workflows, I deliver solutions that drive measurable results.
              </p>
            </motion.div>
          </motion.div>

          {/* Right content - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-3xl" />
            
            <div className="relative glass-card rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">My Expertise</h3>
              
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
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}>
                        <skill.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{skill.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
