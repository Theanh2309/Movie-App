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
import ThemeProvider from "./context/ThemeProvider";
import PeoplePage from "@pages/PeoplePage";
import Search from "@pages/SearchPage";

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
      {
        path: "/people/:id",
        element: <PeoplePage />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
              },
            },
          );
          return res;
        },
      },
      { path: "/search", element: <Search /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ModalProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModalProvider>
  </ThemeProvider>,
);
