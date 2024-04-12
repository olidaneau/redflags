import * as React from 'react'

import {ChakraProvider} from '@chakra-ui/react'
import Landing from "./routes/Landing.tsx";
import ErrorPage from "./error-page.tsx";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landing/>,
            errorElement: <ErrorPage/>,
        },
    ])

    return (
        <ChakraProvider>
            <RouterProvider router={router}/>
        </ChakraProvider>
    )
}

export default App