# FUTURE_FS_01: Personal Professional Portfolio

A modern, animated, and production-ready personal portfolio website built with Next.js, React, and Tailwind CSS, fulfilling the requirements for the FUTURE Internship Task 1.

## Features

- **Modern Tech Stack**: Next.js 14 (App Router), React 19, Tailwind CSS v4.
- **Smooth Animations**: Engaging UI/UX with Framer Motion.
- **Glassmorphism UI**: Sleek, modern design with a gradient background and blurred elements.
- **Dynamic Content**: Projects loaded from a JSON file (easily adaptable to a CMS or database).
- **Functional Contact Form**: Sends emails directly to your inbox using Nodemailer.
- **Responsive & Dark Themed**: Looks great on all devices with a default dark theme.
- **SEO Optimized**: Metadata configured for better search engine visibility.
- **Deploy-Ready**: Prepared for one-click deployment on Vercel.

## Getting Started

### Prerequisites

- Node.js (v18.17 or later)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/FUTURE_FS_01.git
    cd FUTURE_FS_01
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the project root by copying the example:
    ```bash
    cp .env.example .env.local
    ```
    
    Now, fill in the `.env.local` file with your credentials:
    - `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_SECURE`: Your email SMTP server details (e.g., for Gmail, use `smtp.gmail.com`, `465`, `true`).
    - `EMAIL_USER`: The email address you will send contact form messages from.
    - `EMAIL_PASS`: The **app-specific password** for your email account (do not use your regular password).
    - `EMAIL_TO`: The email address where you want to receive the messages.

### Running the Development Server

Start the development server with:
```bash
npm run dev
