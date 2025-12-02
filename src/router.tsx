import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Wizard from "./pages/Wizard";
import Help from "./pages/Help";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/wizard", element: <Wizard /> },
  { path: "/help", element: <Help /> },
]);

export default router;
