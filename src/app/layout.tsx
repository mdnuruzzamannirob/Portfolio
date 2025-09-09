import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'POrtfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <h1 className="flex items-center p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi praesentium ea qui
          mollitia molestiae rem quaerat rerum iste, laborum beatae quas veritatis temporibus quia
          consequatur nesciunt expedita. Atque, suscipit placeat.
        </h1>
      </body>
    </html>
  );
}
