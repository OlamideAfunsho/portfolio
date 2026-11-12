import type { Metadata } from "next";
import { geistSans, geistMono, marcellus, momoSignature } from "./font";
import "./globals.css";

const title = "Olamide Afunsho — Full-Stack Engineer";
const description =
  "Full-stack engineer building fast, reliable web products with Next.js and TypeScript.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${marcellus.variable} ${momoSignature.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#121212] font-sans">
        {children}
      </body>
    </html>
  );
}
