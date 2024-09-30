import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../Layout/LandingPage/Landing";
import Dashboard from "../Layout/Dashboard/pages/Dashboard";
import Register from "../page/Login/Register";
import Error from "../page/error/Error";
import Login from "../page/Login/Login";
import CreateAdmin from "../Layout/Dashboard/components/CreateAdmin";
import Table from "../Layout/Dashboard/components/Table";
import Contact from "../page/Contact/Contact";
import Facility from "../page/Facility/Facility";
import FacilityCard from "../page/Facility/FacilityCard";
import About from "../page/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/facility",
        element: <Facility />,
      },
      {
        path: "/facilityCard/:id",
        element: <FacilityCard />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/admin",
        element: <CreateAdmin />,
      },
      {
        path: "/dashboard/table",
        element: <Table />,
      },
    ],
  },
]);

export default router;
