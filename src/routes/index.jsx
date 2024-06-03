import Layout from "../Comonents/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Service from "../Pages/Service";


export const ROUTES = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "home",
                element: <Home/>,
            },
            {
                path: "service",
                element: <Service/>,
            }
        ]
    },
    {path: "login", element: <Login/>},
    {path: "signup", element: <SignUp/>}
]