import {
    createBrowserRouter,
} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/Register';


const router = createBrowserRouter([
    {
        path: "/",
        element: ( <Login /> ),
    },
    {
        path: "/register",
        element: ( <Register /> ),
    },

]);

export default router;
