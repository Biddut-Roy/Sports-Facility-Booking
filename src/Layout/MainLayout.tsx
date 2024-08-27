import { Outlet } from "react-router-dom";
import Footer from "../page/footer/Footer";
import Navbar from "../page/navbar/Navbar";
import "../App.css";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <div className="sm:w-full md:h-full lg:w-screen">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
