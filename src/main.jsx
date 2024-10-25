import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./pages/HomePage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import RootLayout from "./pages/RootLayout.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/movie-detail/:id", element: <MovieDetail /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>{/* <App /> */}</RouterProvider>,
);
