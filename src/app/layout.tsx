'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";
import { AuthProvider } from "./context/useContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header/Header";
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
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <Header />
            <div style={{ minHeight: "83vh" }}>
              {children}
            </div>
            <Footer />
            <ToastContainer />

          </QueryClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
