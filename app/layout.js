import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className='bg-black min-h-screen  overflox-x-hidden text-white'>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
};

export default Layout;
