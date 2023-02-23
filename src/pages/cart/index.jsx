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

const Cart = () => {
    const { handleDelete, handleBuy, openAlert, setOpenAlert } = useCartController();

    const cartList = useSelector((state) => state.cart);
    const totalBill = cartList.reduce((accumulator, currentvalue) => accumulator + currentvalue.price * currentvalue.quantity, 0)
    return (
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
                                        <TableCell align="right">{row.quantity}</TableCell>
                                        <TableCell align="right">{row.quantity * row.price}</TableCell>
                                        <TableCell align="right"> <Button content={<DeleteIcon />} handleFunction={() => handleDelete(row?.key)} /></TableCell>
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

export default Cart;