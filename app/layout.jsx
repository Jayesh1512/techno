import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";
import { Inter  } from "next/font/google";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // optional for using as a CSS variable
  display: 'swap', // recommended for performance
});



const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`bg-black min-h-screen overflow-x-hidden text-white ${inter.className}`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
};

export default Layout;
