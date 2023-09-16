import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Components/Form.jsx";
import GetStatus from "./Components/GetStatus.jsx";
import CallBack from "./Components/CallBack.jsx";
import NotFound from "./Components/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/status" element={<GetStatus />} />
        <Route path="/retrieve" element={<CallBack />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
