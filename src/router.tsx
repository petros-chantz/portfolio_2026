import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { HomePage } from "./pages/home/HomePage";
import { ApproachPage } from "./pages/approach/ApproachPage";
import { VisionPage } from "./pages/vision/VisionPage";
//import { EssaysIndex } from "./pages/essay/EssaysIndex";
//import { EssayPage } from "./pages/essay/EssayPage";
import { NotFound } from "./pages/NotFound";
import { Presentation } from "./pages/Presentation";

export const router = createBrowserRouter([
  { path: "/presentation", element: <Presentation /> },
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/approach", element: <ApproachPage /> },
      { path: "/vision", element: <VisionPage /> },
      // { path: "/essays", element: <EssaysIndex /> },
      //  { path: "/essays/:slug", element: <EssayPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
