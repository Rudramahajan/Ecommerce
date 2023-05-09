import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from 'network/firebase/firebaseConfig';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct, buyProducts } from 'redux-thunk/redux/cart/CartSlice';
import { addOrder } from "redux-thunk/redux/order/orderSlice";


const useCartController = ({ getData, token }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openAlert, setOpenAlert] = useState(false);
  const cart = useSelector((state) => state.cart);
  const state = useSelector((state) => state.products);
  const products = state.data;
  console.log(token);

  const handleDelete = async (id) => {
    let tempdart = [];
    tempdart = await getDoc(doc(db, 'users', token));
    let myCart = tempdart.data().cart;
    myCart = myCart.filter((p) => {
      if (p['id'] !== id) {
        console.log(p['id'], ' ', id);
        return p;
      }
    })
    await updateDoc(doc(db, 'users', token), {
      cart: myCart
    });
    getData();
  }

  const handleBuy = async() => {
    let tempdart = [];
    tempdart = await getDoc(doc(db, 'users', token));
    let myCart = tempdart.data().cart;
    let myOrder = tempdart.data().order;
    myOrder.push({key:new Date().getTime(),myCart});
    console.log('orderStatus ',myOrder);
    await updateDoc(doc(db, 'users', token), {
      order: myOrder,
      cart: []
    });
    setOpenAlert(!openAlert);
    getData();
    tempdart = await getDoc(doc(db, 'users', token));
    dispatch(addOrder({ value: tempdart.data().order }));
    // setTimeout(() => {
    //   navigate('/home');
    //   dispatch(buyProducts({}));
    // }, 1000);
  }

  return {
    handleDelete, handleBuy, openAlert, setOpenAlert
  }
}

export default useCartController;

