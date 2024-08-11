import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/navBar';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ghost T2',
  description: 'Nơi lưu trữ hình dìm của các bạn',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
