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
import { Toaster } from "./components/ui/sonner.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ViewTrip from "./pages/view-trip/[tripId]/index.tsx";
import MyTrips from "./pages/my-trips/index.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Navbar />
//         <LandingPage />
//         <FooterSection />
//       </>
//     ),
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/create-trip",
//     element: (
//       <>
//         <Navbar />
//         <CreateTrip />
//         <FooterSection />
//       </>
//     ),
//   },
//   {
//     path: "/view-trip/:tripId",
//     element:  (
//       <>
//         <Navbar />
//         <ViewTrip />
//       </>
//     ),
//   },
//   {
//     path: "/my-trips",
//     element: (
//       <>
//         <Navbar />
//         <MyTrips />
//       </>
//     ),
//   }
// ]);

const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
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
        {
          path: "/view-trip/:tripId",
          element:  (
            <>
              <Navbar />
              <ViewTrip />
            </>
          ),
        },
        {
          path: "/my-trips",
          element: (
            <>
              <Navbar />
              <MyTrips />
            </>
          ),
        }
      ],
    },
  ],
  {
    basename: "/tripmate", // Set the basename to match the base path
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}
      >
        <RouterProvider router={router} />
        <Toaster />
      </GoogleOAuthProvider>
    </ThemeProvider>
  </StrictMode>
);
