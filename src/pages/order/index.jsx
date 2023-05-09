import {
  useDispatch,
  useSelector
} from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Box
} from '@mui/material'

import { addOrder, deleteOrder } from "redux-thunk/redux/order/orderSlice";

import OrderDetails from "pages/order/components/OrderDetails/index";
import Button from 'components/ui-kit/Button/index'
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "network/firebase/firebaseConfig";
import { LoaderBox } from "pages/products/style";
import { MoonLoader } from "react-spinners";

const Order = ({ open, handleClickOpen }) => {

  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.profile.firebaseToken);
  
  const handleClear =async () => {
    await updateDoc(doc(db, 'users', token), {
      order: []
    });
    dispatch(addOrder({ value: []}));
  }

  console.log('our orders', orders);

  return (
    <>
      {orders === null ? (
        <LoaderBox>
          <MoonLoader
            color="#36d7b7"
            size={100}
          />
        </LoaderBox>
      ) : (
        <Dialog
          open={open}
          sx={{ minWidth: '40vw' }}
        >
          <DialogTitle >
            {"My Orders"}
          </DialogTitle>
          <DialogContent>

            {
              orders.length === 0 ?
                <Box sx={{ width: '40vw', height: '50vhx' }}>
                  <Typography>No Order History</Typography>
                </Box> :
                orders.map((order) => {
                  return (
                    <OrderDetails key={order.key} order={order} />
                  )
                })
            }
          </DialogContent>
          <DialogActions>
            <Button content={'Close'} handleFunction={handleClickOpen} />
            {
              orders.length === 0 ? null :
                <Button content={'Clear order history'} handleFunction={handleClear} />
            }
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

export default Order;