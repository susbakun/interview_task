import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import styles from "./globals.module.scss";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interview Scheduler",
  description: "Interview Scheduler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className + " " + styles.body}>{children}</body>
    </html>
  );
}
