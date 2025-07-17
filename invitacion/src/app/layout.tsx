import type { Metadata } from "next";
import { Geist, Geist_Mono, Meow_Script, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const meowScript = Meow_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-meow',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mis XV",
  description: "Invitación de 15 años",
  icons: {
    icon: '/vector.jpg', 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${meowScript.variable} 
          ${playfairDisplay.variable} 
          antialiased h-screen w-screen overflow-hidden
        `}
      >
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
