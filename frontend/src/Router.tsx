import Landing from "./routes/home/Landing.tsx";
import ErrorPage from "./error-page.tsx";
import * as React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/scan",
    element: <Scan />,
    errorElement: <ErrorPage />,
  },
]);
