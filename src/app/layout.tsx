import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Knotify - Because every knot deserves to be notified.",
  description: "Knotify turns your wedding invitation into a stunning, interactive website: elegant, personal, and unforgettable. Create personalized wedding websites that capture your journey and share essential details.",
  keywords: ["wedding", "invitation", "website", "digital", "RSVP", "wedding planning", "love story"],
  authors: [{ name: "Knotify Team" }],
  creator: "Knotify",
  publisher: "Knotify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://knotify.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Knotify - Because every knot deserves to be notified.",
    description: "Knotify turns your wedding invitation into a stunning, interactive website: elegant, personal, and unforgettable.",
    url: "https://knotify.com",
    siteName: "Knotify",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Knotify - Wedding Website Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knotify - Because every knot deserves to be notified.",
    description: "Knotify turns your wedding invitation into a stunning, interactive website: elegant, personal, and unforgettable.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}