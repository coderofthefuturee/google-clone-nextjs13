import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body className="relative min-h-screen">
        {children}
        <Analytics />

        <Footer />
      </body>
    </html>
  );
}
