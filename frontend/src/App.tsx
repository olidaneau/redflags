import * as React from "react";

import {ChakraProvider} from "@chakra-ui/react";
import router from "./Router.tsx";
import {RouterProvider} from "react-router-dom";

function App() {
    return (
        <ChakraProvider>
            <RouterProvider router={router}/>
        </ChakraProvider>
    );
}

export default App;
