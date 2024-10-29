import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from "./pages/create-trip/index.tsx";
import ErrorPage from "./pages/error-404/index.tsx";
import LandingPage from "./pages/landing-page/index.tsx";
import { ThemeProvider } from "./components/layout/theme-provider.tsx";
import Navbar from "./components/layout/navbar.tsx";
import { FooterSection } from "./components/layout/footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <LandingPage />
        <FooterSection />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-trip",
    element: (
      <>
        <Navbar />
        <CreateTrip />
        <FooterSection />
      </>
    ),
  },
  // {
  //   path: "/admin/*",
  //   element: (
  //     <>
  //       <AdminHeader />
  //       <RouterProvider
  //         router={createBrowserRouter([
  //           {
  //             path: "dashboard",
  //             element: <Dashboard />,
  //           },
  //           {
  //             path: "profile",
  //             element: <Profile />,
  //           },
  //         ])}
  //       />
  //     </>
  //   ),
  // },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
