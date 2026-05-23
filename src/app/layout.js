import './globals.css';

export const metadata = {
  title: 'Prince Sinha — builder, thinker, occasionally funny',
  description:
    'Personal internet space of Prince Sinha. Senior Director of Innovations & AI at Cyble. Builder of things that work. Thinker of thoughts that might.',
  keywords: [
    'Prince Sinha',
    'portfolio',
    'AI architect',
    'full stack developer',
    'cybersecurity',
    'engineering leader',
  ],
  authors: [{ name: 'Prince Sinha' }],
  openGraph: {
    title: 'Prince Sinha — builder, thinker, occasionally funny',
    description:
      'Personal internet space. Engineering, AI, cybersecurity, and the occasional observation about being alive.',
    url: 'https://theprincevishal.in',
    siteName: 'Prince Sinha',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prince Sinha',
    description: 'Personal internet space.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
