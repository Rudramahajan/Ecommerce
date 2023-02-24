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

import { deleteOrder } from "redux-thunk/redux/order/orderSlice";

import OrderDetails from "pages/order/components/OrderDetails/index";
import Button from 'components/ui-kit/Button/index'

const Order = ({ open, handleClickOpen }) => {

  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();

  return (
    <>
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
                  <OrderDetails key={order.id} order={order} />
                )
              })
          }
        </DialogContent>
        <DialogActions>
          <Button content={'Close'} handleFunction={handleClickOpen}/>
          {
            orders.length === 0 ? null :
            <Button content={'Clear order history'} handleFunction={()=>dispatch(deleteOrder({}))}/>
          }
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Order;