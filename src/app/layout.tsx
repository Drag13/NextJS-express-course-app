import { Inter } from 'next/font/google';
import './styles/globals.css';
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Drag13 blog',
  description: 'Super description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
