import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adhilekshmi R | AI Engineer & Backend Developer",
  description: "Portfolio of Adhilekshmi R — AI Engineer, Backend Developer, and Product Builder.",
  authors: [{ name: "Adhilekshmi R" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ background: "#0C0C0C" }}>{children}</body>
    </html>
  );
}
