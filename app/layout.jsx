import "./globals.css";
import { Inter } from 'next/font/google'
 const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
};

export default Layout;
