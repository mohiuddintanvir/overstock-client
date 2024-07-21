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
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/errorpage/ErrorPage";
import AllUsers from "../pages/allusers/AllUsers";
import AdminRoutes from "./Privateroutes/AdminRoutes/AdminRoutes";
import Sellers from "../pages/sellers/Sellers";
import { FacebookAuthProvider } from "firebase/auth";
import Payment from "../payment/Payment";
import DisplayError from "../shared/error/DisplayError";
import Card from "../pages/card/Card";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/Products/:name',
                loader:({params})=>fetch(`https://over-stcok-server.vercel.app/categories/${params.name}`),
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
            {
                path: '/cart',
                element: <Card></Card>
            },
            {
                path:"*",
                element: <ErrorPage></ErrorPage>
            },
           
           
        ]
    },
    {
        path:'/deshboard',
        element:<PrivateRoutes><DeshboardLayout></DeshboardLayout></PrivateRoutes>,
        errorElement:<DisplayError></DisplayError>,
        children:[
         
            {
                path: '/deshboard',
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
            {
                path: '/deshboard/allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes> 
            },
            {
                path: '/deshboard/seller',
                element: <AdminRoutes><Sellers></Sellers></AdminRoutes> 
            },
            {
                path: '/deshboard/payment/:id',
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>,
                loader: ({params})=>fetch(`https://over-stcok-server.vercel.app/bookings/${params.id}`)
            },

        ]
    }
])
export default router;