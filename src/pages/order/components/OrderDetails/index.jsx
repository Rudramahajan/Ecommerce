import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Paper
} from "@mui/material";

const OrderDetails = ({ order }) => {
  return (
      <>
          <Box sx={{ marginTop: '2vh', backgroundColor: 'grey' }}>
              <Typography>Order Id : {order.id}</Typography>
              <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 500 }} aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell>Product Name</TableCell>
                              <TableCell align="right">Price&nbsp;(Rs)</TableCell>
                              <TableCell align="right">Quantity</TableCell>
                              <TableCell align="right">Total</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {order.value.map((row) => (
                              <TableRow
                                  key={row.name}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                  <TableCell component="th" scope="row">
                                      {row.title}
                                  </TableCell>
                                  <TableCell align="right">{row.price}</TableCell>
                                  <TableCell align="right">{row.quantity}</TableCell>
                                  <TableCell align="right">{row.price * row.quantity}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </Box>
      </>
  )
}

export default OrderDetails;
