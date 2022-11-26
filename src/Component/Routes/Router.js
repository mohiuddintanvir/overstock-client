import {
    createBrowserRouter,
   
} from "react-router-dom";

import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import ProductCatagory from "../Home/ProductCatagory/ProductCatagory";
import Deshboard from "../pages/Dashboard/MainDeshboard/Deshboard";
import PrivateRoutes from "./Privateroutes/PrivateRoutes";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Products',
                element: <ProductCatagory></ProductCatagory>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    },
    {
        path:'/deshboard',
        element:<PrivateRoutes><Deshboard></Deshboard></PrivateRoutes> 
    }
])
export default router;