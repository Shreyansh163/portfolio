This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

- git clone https://github.com/Shreyansh163/portfolio.git
- cd portfolio
- npm install
- npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Portfolio Website – Full Stack Next.js Application

A production-grade personal portfolio built with **Next.js App Router**, **Prisma**, **PostgreSQL (Supabase)**, and **Resend**.  
The project focuses on clean UI/UX, scalable backend architecture, and real-world deployment practices.

🔗 **Live Demo:** https://<your-vercel-url>.vercel.app

---

## ✨ Features

- Modern, minimal, and responsive UI
- Dynamic project pages using App Router
- Contact form with backend API
- Data persistence using PostgreSQL
- Email notifications on new contact submissions
- Deployed with GitHub → Vercel workflow

---

## 🧱 Tech Stack

**Frontend**
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

**Backend**
- Next.js API Routes
- Prisma ORM
- PostgreSQL (Supabase)

**Integrations**
- Resend (email notifications)

**Deployment**
- Vercel
- GitHub CI-style deployments

---

## 🏗️ Architecture Overview

Client (React Components)
↓
API Routes (Next.js App Router)
↓
Prisma ORM
↓
PostgreSQL (Supabase)
↓
Email Notification (Resend)

---

## 📬 Contact Workflow

1. User submits the contact form
2. Data is validated on the server
3. Message is stored in the database
4. Email notification is sent to the site owner
5. User receives a success response

This mirrors how real-world product contact systems work.

---

## ⚙️ Environment Variables

The following environment variables are required:

```env
DATABASE_URL=your_postgres_connection_string
RESEND_API_KEY=your_resend_api_key

Getting Started Locally:-

