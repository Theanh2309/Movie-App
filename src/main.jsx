import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./pages/HomePage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@pages/HomePage.jsx";
import MovieDetail from "@pages/MovieDetail.jsx";
import RootLayout from "@pages/RootLayout.jsx";
import TVShowDetail from "@pages/TVShowDetail";
import NotFound from "@pages/NotFound";
import ModalProvider from "./context/ModalProvider";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/movie-detail/:id", element: <MovieDetail /> },
      { path: "/tv-detail/:id", element: <TVShowDetail /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <RouterProvider router={router}></RouterProvider>,
  </ModalProvider>,
);
