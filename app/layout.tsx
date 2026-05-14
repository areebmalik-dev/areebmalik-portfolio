import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FloatingOrbs } from "@/components/floating-orbs";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Areeb Malik | AI Automation Engineer & Full Stack Developer",

  description:
    "Areeb Malik is a Full Stack Developer and AI Automation Engineer specializing in Next.js, React, AI workflows, n8n automation, SaaS applications, and modern web experiences.",

  keywords: [
    "Areeb Malik",
    "Areeb Malik Developer",
    "Areeb Malik AI Engineer",
    "Areeb Malik Full Stack Developer",
    "Areeb Malik Next.js Developer",
    "AI Automation Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "n8n Automation",
    "AI Workflows",
    "Web Development",
    "AI Integrations",
    "SaaS Developer",
    "Python Developer",
    "areeb malik",
    "areebmalikdev",
    "areebmalik-dev",
    "areeb-malik-dev",
  ],

  authors: [{ name: "Areeb Malik" }],
  creator: "Areeb Malik",
  publisher: "Areeb Malik",

  metadataBase: new URL("https://areebmalik.com"),

  alternates: {
    canonical: "https://areebmalik.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://areebmalik.com",
    siteName: "Areeb Malik",
    title: "Areeb Malik | AI Automation Engineer & Full Stack Developer",

    description:
      "Building AI-powered automation systems, SaaS applications, workflows, and modern web experiences using Next.js, React, Python, AI tools, and n8n.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Areeb Malik",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@areebmalikdev",
    title: "Areeb Malik | AI Automation Engineer & Full Stack Developer",

    description:
      "Building AI-powered workflows, automation systems, and modern web experiences.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",

  icons: {
    icon: "/logo3.png",
    shortcut: "/logo3.png",
    apple: "/logo3.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0515",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased min-h-screen bg-background text-foreground overflow-x-hidden">
        <FloatingOrbs />
        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
