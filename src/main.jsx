import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "./Components/Form.jsx";
import GetStatus from "./Components/GetStatus.jsx";
import CallBack from "./Components/CallBack.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/status",
    element: <GetStatus />,
  },
  {
    path: "/retrieve",
    element: <CallBack />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
