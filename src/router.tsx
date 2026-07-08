import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { DetailLayout } from "./ui/DetailLayout";
import { Navigate } from "react-router-dom";
import { ProjectsPage } from "./pages/projects/ProjectsPage";
import { ProjectDetailPage } from "./pages/projects/ProjectDetailPage";
import { NotFound } from "./pages/NotFound";
import { ComingSoonPage } from "./pages/ComingSoonPage";

const isComingSoonMode = import.meta.env.VITE_COMING_SOON_MODE === "true";

const appRoutes = [
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <ProjectsPage /> },
      { path: "/projects", element: <Navigate to="/" replace /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    element: <DetailLayout />,
    children: [
      { path: "/projects/:slug", element: <ProjectDetailPage /> },
    ],
  },
];

const maintenanceRoutes = [
  {
    path: "*",
    element: <ComingSoonPage />,
  },
];

export const router = createBrowserRouter(isComingSoonMode ? maintenanceRoutes : appRoutes);
