import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../Layout/LandingPage/Landing";
import Dashboard from "../Layout/Dashboard/pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
