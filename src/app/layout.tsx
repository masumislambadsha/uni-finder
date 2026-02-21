import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shabuj Global – Assignment",
  description: "University Finder module demo built with Next.js and Supabase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
