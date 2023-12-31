import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BrandCardDetails from "../Pages/Brands/BrandCardDetails";
import BrandProductDetails from "../Pages/Brands/BrandProductDetails";
import BrandProductUpdate from "../Pages/Brands/BrandProductUpdate";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/brand')
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/cartproducts')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/brandDetails/:id',
                element: <BrandCardDetails></BrandCardDetails>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/brandproduct/:id',
                element: <PrivateRoute><BrandProductDetails></BrandProductDetails></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/brandproductupdate/:id',
                element: <PrivateRoute><BrandProductUpdate></BrandProductUpdate></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/products')
            }
        ]
    },
]);

export default router;