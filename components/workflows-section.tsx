"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ExternalLink, MessageSquare, Linkedin, FileSpreadsheet, Bot, Mail, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TiltCard } from "@/components/ui/tilt-card"

const categories = ["All", "AI", "WhatsApp", "LinkedIn", "Google Sheets", "Email", "Social Media"]

const workflows = [
  {
    id: 1,
    title: "WhatsApp AI Bot",
    description: "Intelligent customer support bot that handles inquiries 24/7, books appointments, answers FAQs, and escalates complex issues to humans when needed.",
    category: "WhatsApp",
    techStack: ["n8n", "WhatsApp Business", "OpenAI", "Airtable"],
    icon: MessageSquare,
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 2,
    title: "LinkedIn Automation",
    description: "Automated connection requests, personalized outreach messages, engagement tracking, and lead nurturing system that grows your network on autopilot.",
    category: "LinkedIn",
    techStack: ["n8n", "LinkedIn API", "GPT-4", "Google Sheets"],
    icon: Linkedin,
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "Google Sheets CRM",
    description: "Transform Google Sheets into a powerful CRM with automated follow-ups, pipeline tracking, deal scoring, and team notifications.",
    category: "Google Sheets",
    techStack: ["n8n", "Google Sheets", "Gmail", "Slack", "Zapier"],
    icon: FileSpreadsheet,
    gradient: "from-green-600 to-teal-600",
    bgGradient: "from-green-600/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "AI Lead Generation",
    description: "Automatically qualify and score leads using AI, enrich data from multiple sources, and route high-priority leads to your sales team in real-time.",
    category: "AI",
    techStack: ["n8n", "OpenAI", "HubSpot", "Clearbit", "Webhook"],
    icon: Bot,
    gradient: "from-primary to-secondary",
    bgGradient: "from-primary/20 to-secondary/20",
  },
  {
    id: 5,
    title: "AI Email Automation",
    description: "Smart email sequences that adapt based on recipient behavior, A/B test subject lines, and personalize content using AI for maximum engagement.",
    category: "Email",
    techStack: ["n8n", "SendGrid", "OpenAI", "Airtable"],
    icon: Mail,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 6,
    title: "Social Media Automation",
    description: "Create once, publish everywhere. AI-powered content repurposing and scheduling across Instagram, Twitter, LinkedIn, and Facebook.",
    category: "Social Media",
    techStack: ["n8n", "OpenAI", "Buffer", "Canva API"],
    icon: Share2,
    gradient: "from-pink-500 to-purple-500",
    bgGradient: "from-pink-500/20 to-purple-500/20",
  },
]

export function WorkflowsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredWorkflows = activeCategory === "All" 
    ? workflows 
    : workflows.filter(w => w.category === activeCategory)

  return (
    <section id="workflows" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-medium mb-4">AI Automation</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Workflow <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Intelligent automation workflows that save time and drive business growth.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
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

        {/* Workflow cards grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWorkflows.map((workflow, index) => (
              <motion.div
                key={workflow.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <TiltCard degree={12} className="h-full">
                  <div className="h-full glass-card rounded-2xl overflow-hidden border border-transparent group-hover:border-primary/30 transition-all duration-500 relative">
                  {/* Gradient border effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/50 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                  
                  {/* Image/Icon area */}
                  <div className={`relative h-44 bg-gradient-to-br ${workflow.bgGradient} overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.3 }}
                        className={`p-5 rounded-2xl bg-gradient-to-br ${workflow.gradient} shadow-lg`}
                      >
                        <workflow.icon className="h-12 w-12 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-lg rotate-12" />
                      <div className="absolute bottom-4 right-4 w-16 h-16 border border-white/20 rounded-lg -rotate-12" />
                      <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-white/20 rounded-full" />
                    </div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${workflow.gradient} text-white shadow-lg`}>
                        {workflow.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {workflow.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-5 line-clamp-3 leading-relaxed">
                      {workflow.description}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {workflow.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group/btn hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30"
                    >
                      View Workflow
                      <ExternalLink className="ml-2 h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
