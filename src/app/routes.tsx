import { createBrowserRouter } from "react-router";
import IntroPage from "./pages/IntroPage";
import MainSite from "./pages/MainSite";
import FAQ from "/Users/yousefelfaidy/Desktop/My Projects/SYSOUT Website/src/app/pages/FAQ.tsx";
import PrivacyPolicy from "/Users/yousefelfaidy/Desktop/My Projects/SYSOUT Website/src/app/pages/Privacypolicy.tsx";
import TermsOfService from "/Users/yousefelfaidy/Desktop/My Projects/SYSOUT Website/src/app/pages/TermsOfService.tsx";
 
// ملاحظة: صفحة اختيار اللغة (LanguageSelection) اتشالت من الـ flow.
// الملف src/app/pages/LanguageSelection.tsx مبقاش مستخدم في أي مكان،
// تقدر تمسحه من المشروع بأمان أو تسيبه من غير ما يعمل أي مشكلة.
 
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
 