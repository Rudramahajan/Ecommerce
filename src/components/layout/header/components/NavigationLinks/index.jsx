import {
    Typography,
    Box
} from "@mui/material";

import { NavLink } from "react-router-dom";
import { checkToken } from "utils/commonservices/localstorageservices";

import routelist from 'routes/routeList';
import { Badge } from '@mui/material';
import Order from "pages/order/index";
import useNavigationController from "../controller/useNavigationController";
import NavigationLink from "assets/styles/NavigationLink";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MessageAlert from "components/ui-kit/MessageAlert/index";
import CartBadge from "./components/CartBadge";

const navlist = (auth) => {
    const nav = routelist.filter((route) => {
        if (route.hasAuth === auth) {
            return route;
        }
    });
    return nav;
}



const NavigationLinks = () => {
    const { openOrderDialog, openLogoutAlert, setOpenLogoutAlert, handleOrderDialog,
        handleLogout,cartList } = useNavigationController();
        console.log(cartList.length);
    const auth = checkToken();
    const list = navlist(auth);
    return (
        <>
            {list.map((route) => {
                if (route.label === 'Cart') {
                    route.label = (
                        <CartBadge />
                    )
                }
                return (
                    <Typography key={route.id} sx={{ marginRight: '5vw', color: 'white' }}>
                        <NavLink style={{ color: '#fff', textDecoration: 'none' }} to={route.path}>{route.label}</NavLink>
                    </Typography>
                )
            })}
            {auth ? (
                <NavigationLink onClick={handleOrderDialog}>
                    <ShoppingBagIcon />
                </NavigationLink>
            ) : null}
            {auth ?
                <NavigationLink sx={{ position: 'absolute', right: '4vw' }} onClick={handleLogout} >
                    Logout
                </NavigationLink>
                :
                null}
            <Order open={openOrderDialog} handleClickOpen={handleOrderDialog} />
            <MessageAlert open={openLogoutAlert} setOpen={setOpenLogoutAlert} message={'Logout Successfully....'} color={'success'} />
        </>
    )
}

export default NavigationLinks;
