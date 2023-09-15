import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import App from "./App";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: <App />,
    },
    {
      path: "/home",
      Component: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
