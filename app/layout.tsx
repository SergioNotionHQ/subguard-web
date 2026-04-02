import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SubGuard — Recover Failed Subscription Payments Automatically',
  description:
    'SubGuard detects failed subscription payments and automatically retries them. Free to install, 3% of recovered revenue. Compatible with Appstle, ReCharge, Seal & Bold.',
  openGraph: {
    title: 'SubGuard — Subscription Payment Recovery',
    description: 'Recover failed subscription payments automatically. Free to install.',
    url: 'https://getsubguard.com',
    siteName: 'SubGuard',
    type: 'website',
  },
  keywords: [
    'shopify subscription recovery',
    'failed payment recovery',
    'dunning management',
    'appstle',
    'recharge shopify',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
