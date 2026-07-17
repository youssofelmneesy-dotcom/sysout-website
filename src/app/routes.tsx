import { createBrowserRouter } from "react-router";
import IntroPage from "./pages/IntroPage";
import LanguageSelection from "./pages/LanguageSelection";
import MainSite from "./pages/MainSite";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: IntroPage,
  },
  {
    path: "/language",
    Component: LanguageSelection,
  },
  {
    path: "/home",
    Component: MainSite,
  },
]);
