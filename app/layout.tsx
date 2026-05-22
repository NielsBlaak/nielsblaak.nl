import type { Metadata } from 'next';

import '../asset/css/globals.css';
import Header from '../src/components/Header';

export const metadata: Metadata = {
  title: 'Niels Blaak — Frontend Developer',
  description:
    'Portfolio van Niels Blaak, frontend developer uit Nederland. Werkzaam bij JEX, eerder bij Hatsa. Bouwde play-any-song, back-to-work en quizappie.',
  keywords: [
    'Niels Blaak',
    'frontend developer',
    'React',
    'Next.js',
    'TypeScript',
    'Nederland',
    'portfolio',
    'web developer',
  ],
  authors: [{ name: 'Niels Blaak', url: 'https://nielsblaak.nl' }],
  creator: 'Niels Blaak',
  metadataBase: new URL('https://nielsblaak.nl'),
  openGraph: {
    title: 'Niels Blaak — Frontend Developer',
    description:
      'Portfolio van Niels Blaak, frontend developer uit Nederland. Werkzaam bij JEX, eerder bij Hatsa.',
    url: 'https://nielsblaak.nl',
    siteName: 'nielsblaak.nl',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niels Blaak — Frontend Developer',
    description:
      'Portfolio van Niels Blaak, frontend developer uit Nederland. Werkzaam bij JEX, eerder bij Hatsa.',
    creator: '@nielsblaak',
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
  alternates: {
    canonical: 'https://nielsblaak.nl',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧑🏻‍💻</text></svg>",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
