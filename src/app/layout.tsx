import type { Metadata } from "next";
import { Akatab, Inter } from "next/font/google";
import "./globals.css";

const akatab = Akatab({
  variable: "--font-akatab",
  subsets: ["latin"],
  weight: ["400", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Colleen McMillan High School and Post-Secondary Tutoring | Online and In-Person in the North Bay Area",
  description:
    "Professional math and science tutoring for high school and post-secondary students, online and in the North Bay area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${akatab.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
