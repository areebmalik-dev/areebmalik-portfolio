"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, MessageCircle, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Web Projects", href: "#projects" },
  ],
  resources: [
    { label: "Workflows", href: "#workflows" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/areebmalikdev",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/areebmalik-dev", label: "GitHub" },
  {
    icon: MessageCircle,
    href: "https://wa.me/923173205014?text=Hello%20Areeb,%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.",
    label: "WhatsApp",
  },
  { icon: Mail, href: "mailto:areeb777358@gmail.com", label: "Email" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-background to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-border/50">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4 group">
              <Image
                src="/logo3.png"
                alt="Areeb Malik Logo"
                width={70}
                height={70}
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(99,102,241,0.35)]"
                priority
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              AI Automation Engineer & Full Stack Developer. Building
              intelligent workflows and modern web experiences.
            </p>

            {/* Social links */}
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
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Ready to Automate?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Let&apos;s discuss how automation can transform your business.
            </p>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Areeb Malik. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
