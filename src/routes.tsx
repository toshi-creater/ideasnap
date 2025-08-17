import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn } from "./auth/SignIn";
import { SignUp } from "./auth/SignUp";

const router = createBrowserRouter([
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    // {
    //     path: "*",
    //     element: <SignIn />
    // },
])

export default function Root() {
    return <RouterProvider router={router} />
}