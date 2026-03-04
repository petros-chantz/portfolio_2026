import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { Home } from "./pages/Home";
import { Approach } from "./pages/Approach";
import { Vision } from "./pages/Vision";
import { EssaysIndex } from "./pages/EssaysIndex";
import { EssayPage } from "./pages/EssayPage";
import { NotFound } from "./pages/NotFound";
import { Presentation } from "./pages/Presentation";

export const router = createBrowserRouter([
  { path: "/presentation", element: <Presentation /> },
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/approach", element: <Approach /> },
      { path: "/vision", element: <Vision /> },
      { path: "/essays", element: <EssaysIndex /> },
      { path: "/essays/:slug", element: <EssayPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
