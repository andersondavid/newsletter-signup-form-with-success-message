import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newsletter sign-up form with success message solution",
  description: "GThis is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor]",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:bg-charcoalgrey md:flex justify-center items-center h-screen`}>
        <div className="rounded-3xl bg-white md:shadow-2xl shadow-darkslategrey">{children}</div>
      </body>
    </html>
  );
}
