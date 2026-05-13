"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    content: "Areeb transformed our lead generation process completely. The WhatsApp bot he built handles hundreds of inquiries daily, and our response time went from hours to seconds. Absolutely game-changing!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Founder & CEO",
    company: "GrowthLabs Agency",
    content: "The LinkedIn automation system Areeb created helped us triple our connection rate and double our meeting bookings. His attention to detail and understanding of AI is remarkable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Operations Manager",
    company: "E-Shop Global",
    content: "Our order processing used to take hours. With Areeb's n8n automation, it's now completely hands-off. We've saved over 20 hours per week and reduced errors to nearly zero.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Sales Director",
    company: "Apex Consulting",
    content: "The CRM automation Areeb built in Google Sheets is incredible. It rivals expensive CRM software and is perfectly tailored to our workflow. Highly recommend his services!",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Content Strategist",
    company: "MediaPulse Digital",
    content: "Areeb's AI content generation pipeline has revolutionized how we create content. What used to take days now takes hours, and the quality is consistently excellent.",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
  },
  {
    name: "David Kumar",
    role: "Tech Lead",
    company: "InnovateTech",
    content: "Working with Areeb on our Next.js dashboard was a fantastic experience. He delivered a beautiful, performant application that exceeded our expectations. True full-stack expertise!",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-secondary/5 to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say about working together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-6 relative overflow-hidden border border-transparent group-hover:border-primary/30 transition-all duration-300">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {/* Glow ring */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-background">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Corner glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
