
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import { LanguageProvider } from "./lib/LanguageContext";
const Home = lazy(() => import("./Home"));
const HomeLayout = lazy(() => import("./Layout/HomeLayout"));
const NotFound = lazy(() => import("./NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children:[
      { index: true, element: <Home /> },
    ]
  },
  {
     path: "*", element: <NotFound /> 
  },
]);


function App() {

  return (
    <LanguageProvider>

      <RouterProvider router={router} />
    </LanguageProvider>
  )
}

export default App;