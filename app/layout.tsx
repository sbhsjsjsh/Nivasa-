import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || 'http://localhost:3000'),
  applicationName: 'nivasa',
  appleWebApp: {
    title: 'nivasa',
    statusBarStyle: 'default',
    capable: true,
  },
  title: {
    default: 'Nivasa property - nivasa real estate Mumbai',
    template: '%s | nivasa',
  },
  description: 'Find your best property in mumbai with nivasa real estate',
  keywords: ['Nivasa property', 'Nivasa real estate', 'Mumbai real estate', 'Buy property in Mumbai', 'Property in Mumbai'],
  authors: [{ name: 'nivasa' }],
  creator: 'nivasa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Nivasa property - nivasa real estate Mumbai',
    description: 'Find your best property in mumbai with nivasa real estate',
    siteName: 'nivasa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nivasa property - nivasa real estate Mumbai',
    description: 'Find your best property in mumbai with nivasa real estate',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://i.ibb.co/MkqMk3Kd/688525843-1781520463088851.jpg',
    shortcut: 'https://i.ibb.co/MkqMk3Kd/688525843-1781520463088851.jpg',
    apple: 'https://i.ibb.co/MkqMk3Kd/688525843-1781520463088851.jpg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'nivasa',
    url: process.env.APP_URL || 'http://localhost:3000',
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-slate-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
