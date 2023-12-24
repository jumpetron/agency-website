import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Testimonial from "./Components/Testimonial/Testimonial";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
        <Testimonial />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
