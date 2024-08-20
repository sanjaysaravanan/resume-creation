import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Resume.tsx";
import Resume from "./ResumeTwo.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
