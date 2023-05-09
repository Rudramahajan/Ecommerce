import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    TableContainer,
    Typography,
    Box
} from "@mui/material";

import { useSelector } from 'react-redux';

import useCartController from "./controller/useCartController";
import Button from 'components/ui-kit/Button/index';
import DeleteIcon from '@mui/icons-material/Delete';
import MessageAlert from 'components/ui-kit/MessageAlert/index';
import { useState } from "react";
import { useEffect } from "react";
import { db } from "network/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { MoonLoader } from "react-spinners";
import { LoaderBox } from 'pages/products/style'

const Cart = () => {
    const getData = async () => {
        let tempCart = await getDoc(doc(db, 'users', token));
        let myCart = tempCart.data().cart;
        console.log(myCart);
        setCartList(myCart)
    }
    const token = useSelector((state) => state.profile.firebaseToken);
    useEffect(() => {
        getData();
    }, []);
    const { handleDelete, handleBuy, openAlert, setOpenAlert } = useCartController({getData,token});
    const [cartList, setCartList] = useState(null);
    const totalBill = cartList?.reduce((accumulator, currentvalue) => accumulator + currentvalue.price * currentvalue.count, 0)
    // const totalBill = 0;
    console.log('cartList ',cartList);
    console.log('hello');
    return (
        <>
            {cartList === null ? (
                <LoaderBox>
                    <MoonLoader
                        color="#36d7b7"
                        size={100}
                    />
                </LoaderBox>
            ) : (
                <div style={{ height: '82vh' }}>
                    <Box>
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Qunatity</TableCell>
                                        <TableCell align="right">Total</TableCell>
                                        <TableCell align="right">Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cartList.map((row) => {
                                        return (
                                            <TableRow
                                                key={row.title}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >

                                                <TableCell component="th" scope="row">
                                                    {row.title}
                                                </TableCell>
                                                <TableCell align="right">{row.price}</TableCell>
                                                <TableCell align="right">{row.count}</TableCell>
                                                <TableCell align="right">{row.count * row.price}</TableCell>
                                                <TableCell align="right"> <Button content={<DeleteIcon />} handleFunction={() => handleDelete(row?.id)} /></TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Typography sx={{ marginTop: '3vh', width: '100%', textAlign: 'center' }} >
                            Total Price : {
                                totalBill.toFixed(1)
                            }
                        </Typography>
                    </Box>
                    {totalBill !== 0 ?
                        <Typography sx={{ width: '100%', marginTop: '3vh', display: 'flex', justifyContent: 'center' }} >
                            <Button content={'Buy'} handleFunction={handleBuy} />
                        </Typography>
                        : null}
                    <MessageAlert open={openAlert} setOpen={setOpenAlert} message={'order placed successfully....'} color={'success'} />
                </div>
            )
            }
        </>
    )
}

export default Cart;