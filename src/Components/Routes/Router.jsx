import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
]);

export default router;