import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./components/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      
    ],
  },
]);

export default routes;
