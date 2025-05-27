import {
    createBrowserRouter,

} from "react-router";
import RootLayOuts from "../LayOuts/RootLayOuts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Singin from "../Pages/Singin/Singin";
const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayOuts,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/singin',
                Component: Singin
            },

        ]
    },
]);

export default router;