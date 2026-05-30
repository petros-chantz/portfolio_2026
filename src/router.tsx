import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { DetailLayout } from "./ui/DetailLayout";
import { Navigate } from "react-router-dom";
import { ProjectsPage } from "./pages/projects/ProjectsPage";
import { ProjectDetailPage } from "./pages/projects/ProjectDetailPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
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
]);
