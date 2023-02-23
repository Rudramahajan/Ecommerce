import Login from "pages/login/index";
import ProductsList from "pages/products/index";
import Profile from "pages/profile/index";
import Cart from "pages/cart/index";

const routelist = [
    {
        id: 1,
        label: 'Login',
        path: '/',
        component: <Login />,
        hasAuth: false
    },
    {
        id: 2,
        label: 'Home',
        path: '/home',
        component: <ProductsList />,
        hasAuth: true
    },
    {
        id: 3,
        label: 'Profile',
        path: '/profile',
        component: <Profile />,
        hasAuth: true
    },
    {
        id: 4,
        label: 'Cart',
        path: '/cart',
        component: <Cart />,
        hasAuth: true
    }
];

export default routelist;