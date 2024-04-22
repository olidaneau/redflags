import Landing from "./routes/home/Landing.tsx";
import ErrorPage from "./error-page.tsx";
import * as React from "react";
import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing/>,
        errorElement: <ErrorPage/>,
    }
]);

export default router