import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import UserLayout from './layouts/user-layout/User-Layout';
import AdminLayout from './layouts/admin-layout/Admin-Layout';
import Home from './pages/user/home/Home';
import About from './pages/user/about/About';
import Products from './pages/user/products/Products';
import ProductDetails from './pages/user/product-details/Product-Details';
import Cart from './pages/user/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import ManageUsers from './pages/admin/manage-users/Manage-Users';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/Sign-up';
import ForgetPassword from './pages/auth/Forget-Password';
import Otp from './pages/auth/otp';
import ResetPassword from './pages/auth/Reset-password';
import NotFound from './pages/not-found/Not-Found';
import Orders from './pages/admin/orders/Orders';
import Messages from './pages/admin/messages/Messages';
import ManageProducts from './pages/admin/manage-products/Manage-Products';


const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'products',
                element: <Products />,
            },
            {
                path: 'products/:id',
                element: <ProductDetails />,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
            {
                path: '*',
                element: <NotFound />,
            }
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <SignUp />,
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />,
    },
    {
        path: '/otp',
        element: <Otp />,
    },
    {
        path: '/reset-password',
        element: <ResetPassword />,
    },
    {
        path: '/admin',
        element: (
            <AdminLayout />
        ),
        children: [
            {
                path: '',
                element: <Navigate to="dashboard" replace />,
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'manage-products',
                element: <ManageProducts />,
            },
            {
                path: 'orders',
                element: <Orders />,
            },
            {
                path: 'manage-users',
                element: <ManageUsers />,
            },
            {
                path: 'messages',
                element: <Messages />,
            },
            {
                path: '*',
                element: <NotFound />,
            }
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    }
]);

const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;