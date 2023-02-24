import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct, buyProducts } from 'redux-thunk/redux/cart/CartSlice';
import { addOrder } from "redux-thunk/redux/order/orderSlice";


const useCartController = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openAlert, setOpenAlert] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  }

  const handleBuy = () => {
    dispatch(addOrder({ value: cart }));
    setOpenAlert(!openAlert);
    setTimeout(() => {
      navigate('/home');
      dispatch(buyProducts({}));
    }, 1000);
  }

  return {
    handleDelete, handleBuy, openAlert, setOpenAlert
  }
}

export default useCartController;

