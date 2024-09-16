import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserLayout from './layouts/user-layout/User-Layout';
import AdminLayout from './layouts/admin-layout/Admin-Layout';
import Home from './pages/user/home/Home';
import About from './pages/user/about/About';
import Products from './pages/user/products/Products';
import ProductDetails from './pages/user/product-details/Product-Details';
import Cart from './pages/user/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Users from './pages/admin/users/Users';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/Sign-up';
import ForgetPassword from './pages/auth/Forget-Password';

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
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '',
                element: <Dashboard />,
            },
            {
                path: 'users',
                element: <Users />,
            },
        ],
    },
]);

const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;