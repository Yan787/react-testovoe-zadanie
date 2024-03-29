import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainProvider from "./providers/MainProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <MainProvider>
    <App />
  </MainProvider>
);
