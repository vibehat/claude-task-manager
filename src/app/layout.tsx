import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://circle.lndev.me';

export const metadata: Metadata = {
  title: {
    template: '%s | Circle by lndev-ui',
    default: 'Circle by lndev-ui',
  },
  description:
    'Project management interface inspired by Linear. Built with Next.js and shadcn/ui, this application allows tracking of issues, projects and teams with a modern, responsive UI.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Circle',
    images: [
      {
        url: `${siteUrl}/banner.png`,
        width: 2560,
        height: 1440,
        alt: 'lndev/ui',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ln_dev7',
    creator: '@ln_dev7',
    images: [
      {
        url: `${siteUrl}/banner.png`,
        width: 2560,
        height: 1440,
        alt: 'Circle',
      },
    ],
  },
  authors: [{ name: 'Leonel NGOYA', url: 'https://lndev.me/' }],
  keywords: ['ui', 'lndev', 'components', 'template'],
};

import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { DataInitializer } from '@/components/layout/DataInitializer';
import { CommandPaletteProvider } from '@/components/command-palette';
import { GlobalCommandPalette } from '@/features/commands';
import { TaskMasterSyncProvider } from '@/components/sync/TaskMasterSyncProvider';
import { SafeTerminalButtonSystem } from '@/features/terminal/components/SafeTerminalButtonSystem';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body
        data-color-mode="dark"
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <DataInitializer>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <TaskMasterSyncProvider>
              <CommandPaletteProvider>
                {children}
                <GlobalCommandPalette />
                <SafeTerminalButtonSystem />
                <Toaster />
              </CommandPaletteProvider>
            </TaskMasterSyncProvider>
          </ThemeProvider>
        </DataInitializer>
      </body>
    </html>
  );
}
