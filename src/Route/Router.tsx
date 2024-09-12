import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../Layout/LandingPage/Landing";
import Dashboard from "../Layout/Dashboard/pages/Dashboard";
import Register from "../page/Login/Register";
import Error from "../page/error/Error";
import Login from "../page/Login/Login";

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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
