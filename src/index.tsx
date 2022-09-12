import ReactDOM from "react-dom/client";
import App from "./App";
import "./tailwind.css";
import "./styles/baseline.scss";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <div className="justify-between flex md:flex-row flex-col">
      <Sidebar />
      <Routes>
        <Route path="/" key="main" element={<App />} />
      </Routes>
    </div>
  </BrowserRouter>
);
