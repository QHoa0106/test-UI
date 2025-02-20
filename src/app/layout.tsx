import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bulma/css/bulma.min.css";
import { AuthProvider } from "../context/AuthContext";
import ProtectedLayout from "../components/ProtectedLayout";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hustle Analytics",
  description: "Dashboard for product analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <ProtectedLayout>{children}</ProtectedLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
