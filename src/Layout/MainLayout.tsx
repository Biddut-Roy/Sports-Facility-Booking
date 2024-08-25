import { Outlet } from "react-router-dom";
import Footer from "../page/footer/Footer";
import Navbar from "../page/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <div className="sm:w-full md:h-full lg:w-screen border-2">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
