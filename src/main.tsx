import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from "./pages/create-trip/index.tsx";
import Header from "./components/custom/Header.tsx";
import ErrorPage from "./pages/error-404/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
