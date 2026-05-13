# 🚀 Areeb Malik | n8n & Full-Stack Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

A premium, high-performance portfolio website built with **Next.js 15**, **Tailwind CSS 4**, and **Framer Motion**. This project showcases specialized automation workflows (n8n), full-stack web development projects, and a sleek, modern UI/UX designed for conversion.

---

## ✨ Features

- **🌐 Modern Tech Stack**: Built with the latest Next.js 15 App Router and React 19.
- **🎨 Stunning UI/UX**: Aesthetic design using Tailwind CSS 4 and Shadcn UI components.
- **✨ Fluid Animations**: Smooth transitions and interactive elements powered by Framer Motion.
- **🌌 Interactive Backgrounds**: Dynamic particle effects for an immersive experience.
- **📱 Fully Responsive**: Optimized for all devices, from mobile to ultra-wide monitors.
- **📧 Integrated Contact Form**: Production-ready contact form powered by **Resend** and **Zod** validation.
- **🛠️ Workflow Showcases**: Dedicated sections for n8n automations and complex workflows.
- **🌓 Dark Mode Ready**: Native support for dark/light themes with `next-themes`.
- **🚀 Performance Optimized**: High Lighthouse scores, optimized images, and minimal bundle size.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend & Infrastructure
- **API**: Next.js Serverless Functions
- **Email Service**: [Resend](https://resend.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Validation**: [Zod](https://zod.dev/) / [React Hook Form](https://react-hook-form.com/)

---

## 📂 Project Structure

```bash
├── app/                # Next.js App Router (Pages, Layouts, APIs)
│   ├── api/            # Serverless API routes (e.g., Contact form)
│   └── globals.css     # Global styles & Tailwind directives
├── components/         # React Components
│   ├── ui/             # Reusable Shadcn UI components
│   └── ...             # Feature-specific sections (Hero, About, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions (shadcn/clsx/tailwind-merge)
├── public/             # Static assets (Images, Icons, SVGs)
└── styles/             # Additional styling configurations
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm / pnpm / yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/personal-n8n-portfolio.git
   cd personal-n8n-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your Resend API key:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🏗️ Architecture Explanation

The project follows a modular architecture:
- **Presentation Layer**: React components located in `@/components`. Each section (Hero, About, Skills) is isolated for better maintainability.
- **UI System**: Built on top of Radix UI primitives via Shadcn UI, ensuring accessibility and consistent design.
- **Server-Side Logic**: API routes handle sensitive operations like sending emails via Resend to keep API keys secure.
- **State Management**: React Hook Form manages local form state, while Zod handles schema validation on both client and server.

---

## 🚢 Deployment

The easiest way to deploy this portfolio is using the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub/GitLab/Bitbucket.
2. Import your repository into Vercel.
3. Add the `RESEND_API_KEY` to the **Environment Variables** section in the Vercel dashboard.
4. Click **Deploy**.

---

## 📸 Screenshots

*(Add your screenshots here after deployment)*

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Developed with ❤️ by <a href="https://github.com/your-username">Areeb Malik</a>
</p>
