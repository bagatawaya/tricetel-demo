import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Wizard from "./pages/Wizard";
import Help from "./pages/Help";
import Logs from "./pages/Logs";
import Numbers from "./pages/Numbers";
import Settings from "./pages/Settings";
import Sip from "./pages/Sip";
import Templates from "./pages/Templates";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/wizard", element: <Wizard /> },
  { path: "/help", element: <Help /> },
  { path: "/logs", element: <Logs /> },
  { path: "/numbers", element: <Numbers /> },
  { path: "/settings", element: <Settings /> },
  { path: "/sip", element: <Sip /> },
  { path: "/templates", element: <Templates /> },
]);

export default router;
