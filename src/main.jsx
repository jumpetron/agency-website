import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "../src/assets/css/global.css";
import router from "./Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
