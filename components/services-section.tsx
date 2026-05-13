"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  MessageSquare, 
  Linkedin, 
  Bot, 
  FileSpreadsheet, 
  Code2, 
  Palette, 
  Globe, 
  Layers 
} from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Next.js Development",
    description: "Build modern, high-performance web applications with Next.js, TypeScript, and cutting-edge technologies.",
    gradient: "from-white/80 to-gray-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create stunning, user-friendly interfaces with Tailwind CSS, Framer Motion, and modern design principles.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    description: "End-to-end web development from database design to frontend implementation and deployment.",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "Build scalable SaaS applications with authentication, subscriptions, and analytics dashboards.",
    gradient: "from-primary to-violet-600",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Build intelligent WhatsApp bots that handle customer support, bookings, and lead generation 24/7.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Automation",
    description: "Automate your LinkedIn outreach, connection requests, and content posting to grow your network.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Bot,
    title: "AI Integrations",
    description: "Deploy conversational AI chatbots powered by GPT-4 and Claude that understand context and deliver value.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: FileSpreadsheet,
    title: "Workflow Automation",
    description: "Transform your business processes with n8n automation, Google Sheets integration, and CRM systems.",
    gradient: "from-orange-500 to-red-500",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4">Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            What I <span className="text-gradient">Build</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            From stunning web applications to intelligent automation systems, I deliver 
            solutions that scale with your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                style={{ 
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              />
              
              <div className="relative h-full glass-card rounded-2xl p-6 overflow-hidden border border-transparent group-hover:border-primary/30 transition-all duration-300">
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
                </div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-foreground" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Corner glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
