import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "IT-Vocab-Quiz",
  description:
    "Learn English Vocaburaries related to IT industry by playing Quiz Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
