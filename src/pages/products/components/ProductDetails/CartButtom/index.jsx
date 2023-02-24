import {
    Card,
    Typography
} from '@mui/material';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from 'redux-thunk/redux/cart/CartSlice';
import { useNavigate } from 'react-router-dom';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import MessageAlert from 'components/ui-kit/MessageAlert/index';
import CustomButton from 'components/ui-kit/Button';



const CartButton = ({ id }) => {
    const [productCount, setProductCount] = useState(1);
    const [openAddedToCartAlert, setOpenAddedToCartAlert] = useState(false);

    const state = useSelector((state) => state.products);
    const cart = useSelector((state) => state.cart);
    console.log('cart: ', cart);
    console.log(cart);
    const products = state.data;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAdd = () => {
        setProductCount(productCount + 1);
    }

    const handleMinus = () => {
        if (productCount == 1) {
            setProductCount(productCount);
        } else {
            setProductCount(productCount - 1);
        }
    }
    console.log('ProductCount: ', productCount);

    const handleAddCart = () => {
        let product = products[id - 1];
        dispatch(addProduct({ product, productCount }));

        setProductCount(1);
        setOpenAddedToCartAlert(true);
        setTimeout(() => {
            navigate('/cart');
        }, 1000);
    }
    return (
        <>
            <Card sx={{ display: 'flex' }} >
                <CustomButton content={<AddCircleOutlineOutlinedIcon />} handleFunction={handleAdd} />
                <Typography sx={{ color: '#424242' }}>{productCount}</Typography>
                <CustomButton content={<RemoveCircleOutlineOutlinedIcon />} handleFunction={handleMinus} />
            </Card>
            <CustomButton content={'Add To Cart'} handleFunction={handleAddCart} />
            <MessageAlert open={openAddedToCartAlert} setOpen={setOpenAddedToCartAlert} message={'added successfully....'} color={'success'} />
        </>
    )
}

export default CartButton;