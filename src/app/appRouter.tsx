import { createBrowserRouter } from "react-router-dom";
import { baseLayout } from "./layouts/baseLayout";
import { MainPage } from "@tudushka/pages/main";
import { AboutPage } from "@tudushka/pages/about";

export function appRouter() {
  return createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>Error happend</div>,
      children: [
        {
          path: '/',
          element: <MainPage />
        },
        {
          path: '/about',
          element: <AboutPage />
        }
      ]
    }
  ])
}