import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Food School - Expert Nutrition & Diet Consultation',
  description: 'Transform your life through mindful eating with The Food School. Expert nutrition guidance, personalized meal plans, and professional diet consultation services.',
  keywords: 'dietitian, nutrition, healthy eating, meal plans, weight management, nutrition consultation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}