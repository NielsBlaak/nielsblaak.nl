import type { Metadata } from 'next';

import '../asset/css/globals.css';
import Header from '../src/components/Header';

export const metadata: Metadata = {
  title: 'Nielsblaak.nl',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧑🏻‍💻</text></svg>",
  },
  openGraph: {
    title: 'Nielsblaak.nl',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <main className="h-screen md:mx-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
