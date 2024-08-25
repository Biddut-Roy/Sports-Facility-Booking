import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Footer from "../page/footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "contact",
        element: <Footer />,
      },
    ],
  },
]);

export default router;
