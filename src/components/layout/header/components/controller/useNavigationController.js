import { logoutService } from 'network/services/auth.service';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useNavigationController = () => {
  const [openOrderDialog, setOpenOrderDialog] = useState(false);
  const [openLogoutAlert, setOpenLogoutAlert] = useState(false);

  const cartList = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrderDialog = () => {
    setOpenOrderDialog(!openOrderDialog);
  };

  const handleLogoutAlert = () => {
    setOpenLogoutAlert(!openLogoutAlert);
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