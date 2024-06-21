'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";
import { UserProvider } from "./context/useContext";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <QueryClientProvider client={queryClient}>
            <Header />
            <div style={{ minHeight: "83vh" }}>
              {children}
            </div>
            <Footer />

          </QueryClientProvider>
        </UserProvider>
      </body>
    </html>
  );
}
