"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  Linkedin,
  Github,
  Mail,
  MessageCircle,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { toast } from "sonner";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/areebmalikdev",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: Github,
    href: "https://github.com/areebmalik-dev",
    label: "GitHub",
    color: "hover:text-foreground",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/923173205014?text=Hello%20Areeb,%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.",
    label: "WhatsApp",
    color: "hover:text-green-400",
  },
  {
    icon: Mail,
    href: "mailto:areeb777358@gmail.com",
    label: "Email",
    color: "hover:text-primary",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later or contact me directly via email.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Ready to automate your business? Send me a message and let&apos;s
            discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full h-12 bg-primary hover:bg-primary/90 glow-purple text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a simple automation or a complex AI-powered
                  system, I&apos;m here to help transform your workflows. Reach
                  out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <Link
                      href="mailto:areeb777358@gmail.com"
                      target="_blank"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      areeb777358@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      WhatsApp
                    </div>
                    <Link
                      href="https://wa.me/923173205014?text=Hello%20Areeb,%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
                      target="_blank"
                      className="font-medium hover:text-green-400 transition-colors"
                    >
                      +92 317 3205014
                    </Link>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <div className="text-sm text-muted-foreground mb-4">
                  Follow Me
                </div>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
