import ReactDOM from "react-dom/client";

import "./tailwind.css";
import "./styles/baseline.scss";

import { Router } from "./components/Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Router />);
