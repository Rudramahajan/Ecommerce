import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useNavigationController from "../../../controller/useNavigationController";
import { useSelector } from "react-redux";

const CartBadge = () => {
  const cartList = useSelector((state) => state.cart);
  return (
    <>
      <Badge badgeContent={cartList.length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </>
  )
}

export default CartBadge;