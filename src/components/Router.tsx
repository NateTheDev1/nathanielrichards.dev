import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Articles from "../pages/Articles";
import Experience from "../pages/Experience";
import Terms from "../pages/Terms";
import { Sidebar } from "./Sidebar";

export const Router = () => {
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <BrowserRouter>
      <div
        className={
          !hideSidebar
            ? "justify-between flex md:flex-row flex-col md:h-screen overflow-auto"
            : ""
        }
      >
        {!hideSidebar && <Sidebar />}
        <Routes>
          <Route
            path="/terms"
            element={<Terms setHideSidebar={setHideSidebar} />}
          />
          <Route path="/" key="main" element={!hideSidebar && <App />} />
          <Route path="/articles" element={!hideSidebar && <Articles />} />
          <Route path="/experience" element={!hideSidebar && <Experience />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
