import {
    createBrowserRouter,
   
} from "react-router-dom";


import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import ProductCatagory from "../Home/ProductCatagory/ProductCatagory";

import PrivateRoutes from "./Privateroutes/PrivateRoutes";
import Myorders from "../pages/Myorders/Myorders";
import AddProducts from "../pages/AddProduct/AddProducts";
import Myproducts from "../pages/Myproducts/Myproducts";
import Mybuyers from "../pages/Mybuyers/Mybuyers";
import DeshboardLayout from "../Layout/Dashboardlayout/DeshboardLayout";
import Main from "../Layout/Main/Main";
import Deshboard from "../pages/Dashboard/MainDeshboard/Deshboard";
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
                element:<PrivateRoutes><ProductCatagory></ProductCatagory></PrivateRoutes> 
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
        element:<PrivateRoutes><DeshboardLayout></DeshboardLayout></PrivateRoutes>,
        children:[
            {
              path:'/deshboard'  ,
              element:<Deshboard></Deshboard>
            },
            {
                path: '/deshboard/myorders',
                element: <Myorders></Myorders>
            },
            {
                path: '/deshboard/addproducts',
                element:<AddProducts></AddProducts>
            },
            {
                path: '/deshboard/myproducts',
                element:<Myproducts></Myproducts>
            },
            {
                path: '/deshboard/mybuyers',
                element:<Mybuyers></Mybuyers>
            },

        ]
    }
])
export default router;