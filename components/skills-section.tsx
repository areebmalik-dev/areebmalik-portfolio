"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Code2, 
  Palette, 
  Database, 
  Server, 
  Bot, 
  MessageSquare,
  FileSpreadsheet,
  Workflow,
  Sparkles,
  Zap
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Next.js", level: 95 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "TypeScript", level: 88 },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "Databases", level: 85 },
    ]
  },
  {
    title: "AI & Automation",
    icon: Bot,
    color: "from-primary to-secondary",
    skills: [
      { name: "n8n", level: 95 },
      { name: "OpenAI/GPT", level: 90 },
      { name: "AI Workflows", level: 92 },
      { name: "Automation", level: 95 },
    ]
  },
]

const techBadges = [
  { icon: Code2, label: "Next.js", color: "bg-white/10" },
  { icon: Palette, label: "Tailwind", color: "bg-cyan-500/20" },
  { icon: Database, label: "PostgreSQL", color: "bg-blue-500/20" },
  { icon: Workflow, label: "n8n", color: "bg-orange-500/20" },
  { icon: Bot, label: "OpenAI", color: "bg-green-500/20" },
  { icon: MessageSquare, label: "WhatsApp", color: "bg-emerald-500/20" },
  { icon: FileSpreadsheet, label: "Google Sheets", color: "bg-green-600/20" },
  { icon: Sparkles, label: "Claude AI", color: "bg-purple-500/20" },
  { icon: Server, label: "Node.js", color: "bg-lime-500/20" },
  { icon: Zap, label: "Vercel", color: "bg-white/10" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4">My Skills</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A comprehensive skill set spanning frontend, backend, and AI automation technologies.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-6 relative overflow-hidden border border-transparent group-hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Skills with progress bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                    >
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Corner glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-lg font-medium mb-6 text-muted-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${tech.color} backdrop-blur-sm border border-white/10 cursor-default`}
              >
                <tech.icon className="h-4 w-4 text-foreground" />
                <span className="text-sm font-medium">{tech.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
