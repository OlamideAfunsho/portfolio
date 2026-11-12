import { Geist, Geist_Mono, Marcellus, Momo_Signature } from "next/font/google";

// Body text
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Clock, small labels
export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Headings only: Marcellus has a single weight (400) and no italic,
// so never pair it with font-bold or italic.
export const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

// Logo / signature
export const momoSignature = Momo_Signature({
  variable: "--font-momo-signature",
  subsets: ["latin"],
  weight: "400",
});
