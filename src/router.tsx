import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { HomePage } from "./pages/home/HomePage";
import { ApproachPage } from "./pages/approach/ApproachPage";
import { VisionPage } from "./pages/vision/VisionPage";
import { ProjectsPage } from "./pages/projects/ProjectsPage";
import { ProjectDetailPage } from "./pages/projects/ProjectDetailPage";
//import { EssaysIndex } from "./pages/essay/EssaysIndex";
//import { EssayPage } from "./pages/essay/EssayPage";
import { NotFound } from "./pages/NotFound";
import { PresentationViewer } from "./pages/presentation/PresentationViewer";

export const router = createBrowserRouter([
  { path: "/presentation", element: <PresentationViewer /> },
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/approach", element: <ApproachPage /> },
      { path: "/vision", element: <VisionPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/projects/:slug", element: <ProjectDetailPage /> },
      // { path: "/essays", element: <EssaysIndex /> },
      //  { path: "/essays/:slug", element: <EssayPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
