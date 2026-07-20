import { createBrowserRouter } from "react-router";
import IntroPage from "./pages/IntroPage";
import MainSite from "./pages/MainSite";
import FAQ from "./pages/FAQ.tsx";
import PrivacyPolicy from "./pages/Privacypolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: IntroPage,
  },
  {
    path: "/home",
    Component: MainSite,
  },
  {
    path: "/faq",
    Component: FAQ,
  },
  {
    path: "/privacy-policy",
    Component: PrivacyPolicy,
  },
  {
    path: "/terms-of-service",
    Component: TermsOfService,
  },
]);
 