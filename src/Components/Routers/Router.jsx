
import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
// import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
// import About from "../Pages/About/About";
import Lamborghini from "../Cars/Lamborghini/Lamborgini";
import Login from "../../Login/Login";
import SignUp from "../../Sign up/SignUp";
import AllProductAdd from "../Pages/AllProductAdd/AllProductAdd";
import Ford from "../Cars/Ford/Ford";
// import Bmw from "../Cars/Bmw/Bmw";
import Mercedes from "../Cars/Mercedes/Mercedes";
import Toyota from "../Cars/Toyota/Toyota";
import Tesla from "../Cars/Tesla/Tesla";
import UpdateInfo from "../Pages/Update/UpdateInfo";
import Details from "../../Details/Details";
import Bmw from "../Cars/Bmw/Bmw";
import PrivateRoute from "../../Auth/privateRoute";
// import Tesla from "../Cars/Tesla/Tesla";
// import Ford from "../Cars/Ford/Ford";





const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children: [
           {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/AddProduct')   
           },
        //    6 Brand card data input
        //    {
        //         path:"/AddProduct",
        //         element:<AddProduct></AddProduct>
        //    },
           {
                path:"/AllProductAdd",
                element:<PrivateRoute>
                    <AllProductAdd></AllProductAdd>
                </PrivateRoute>
           },
           {
                path:"/MyCart",
                element:<PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>
           },
        //    {
        //         path:"/About",
        //         element:<About></About>
        //    },
           {
                path:"/signUp",
                element:<SignUp></SignUp>
           },
           {
                path:"/login",
                element:<Login></Login>

           },
          
        //   show all cars
        {
            path:"/Lamborghini",
            element:<Lamborghini></Lamborghini>,
            loader:()=>fetch('http://localhost:5000/AllProductAdd')
        },
        {
            path:"/Ford",
            element:<Ford></Ford>,
            loader:()=>fetch('http://localhost:5000/AllProductAdd')
        },
        {
            path:"/Toyota",
            element:<Toyota></Toyota>,
            loader:()=>fetch('http://localhost:5000/AllProductAdd') 
        },
        {
            path:"/Tesla",
            element:<Tesla></Tesla>,
            loader:()=>fetch('http://localhost:5000/AllProductAdd') 
        },
        {
            path:"Bmw",
            element:<Bmw></Bmw>,
            loader:()=>fetch('http://localhost:5000/AllProductAdd') 
        },
        {
            path:"Mercedes",
            element:<Mercedes></Mercedes>,
            loader:()=>fetch('http://localhost:5000/AllProductAdd')
        },
        {
            path:"Details/:id",
            element:<Details></Details>,
            loader:({params})=>fetch(`http://localhost:5000/AllProductAdd/${params.id}`)

        },
        {
            path:"UpdateInfo/:id",
            element:<UpdateInfo></UpdateInfo>,
            loader:({params})=>fetch(`http://localhost:5000/AllProductAdd/${params.id}`)
       },
       {
        path:"myCart/:id",
        element:<MyCart></MyCart>,
        loader:({params})=>fetch(`http://localhost:5000/AllProductAdd/${params.id}`)
        
       }

        ]

    }
])
export default router;