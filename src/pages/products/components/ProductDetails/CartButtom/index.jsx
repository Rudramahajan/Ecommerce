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
import { db } from 'network/firebase/firebaseConfig';
import { doc, addDoc, where, query, setDoc, deleteDoc,getDoc, updateDoc } from 'firebase/firestore';



const CartButton = ({ id,handleDialogue }) => {
    const [productCount, setProductCount] = useState(1);
    const [openAddedToCartAlert, setOpenAddedToCartAlert] = useState(false);
    const token = useSelector((state) => state.profile.firebaseToken);
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

    const handleAddCart = async () => {
        const addproduct = products[id];
        let tempdart = [];
        tempdart = await getDoc(doc(db,'users',token));
        let myCart = tempdart.data().cart;
        myCart = myCart.filter((p)=>{
            if(p['id'] !== products[id].id){
                console.log(id,' ',products[id].id);
                return p;
            }
        })
        myCart.push({...products[id],count:productCount})
        await updateDoc(doc(db,'users',token),{
            cart : myCart
        });
        setOpenAddedToCartAlert(true);
       setTimeout(handleDialogue, 2000); 
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