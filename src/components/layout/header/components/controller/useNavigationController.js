import { logoutService } from 'network/services/auth.service';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProfile } from 'redux-thunk/redux/profile/ProfileSlice';

const useNavigationController = () => {
  const [openOrderDialog, setOpenOrderDialog] = useState(false);
  const [openLogoutAlert, setOpenLogoutAlert] = useState(false);

  const cartList = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOrderDialog = () => {
    setOpenOrderDialog(!openOrderDialog);
  };
  const token = useSelector((state) => state.profile.firebaseToken);
  const handleLogoutAlert = () => {
    setOpenLogoutAlert(!openLogoutAlert);
    const myProfile = {
      First_Name: '',
      Last_Name: '',
      User_Name: '',
      Email: '',
      Phone: '',
      Address: '',
      firebaseToken: token
    }
    dispatch(setProfile({ value: myProfile }));
    setTimeout(() => {
      logoutService();
      navigate('/');
    }, 1000);

  }

  const handleLogout = () => {
    setOpenLogoutAlert(!openLogoutAlert);
    setTimeout(() => {
      logoutService();
      navigate('/');

    }, 1000);

  }

  return { openOrderDialog, openLogoutAlert, setOpenLogoutAlert, handleOrderDialog, handleLogoutAlert, handleLogout, cartList };
}

export default useNavigationController;