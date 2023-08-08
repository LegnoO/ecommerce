import { useState, useEffect } from 'react';
import {
   Typography,
   Container,
   Box,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper
} from '@mui/material';
import Image from '~/components/Image';
import QuantityButton from '~/components/QuantityButton';
import { ICartItems } from '~/types/ISliceState';

const Cart = () => {
   const [item, setItem] = useState<ICartItems[]>(
      JSON.parse(localStorage.getItem('cart') || '{}').carts
   );
   console.log(item);
   const handle = () => {
      console.log();
   };
   if (item.length) {
      return (
         <Box sx={{ marginTop: 5, marginBottom: 7 }}>
            <Container>
               <Typography
                  sx={{ fontSize: '2.5rem', marginBottom: 4, color: 'common.black' }}
                  component="h4"
               >
                  Your cart
               </Typography>
               <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }}>
                     <TableHead>
                        <TableRow>
                           <TableCell className="border-red" align="left">
                              Product
                           </TableCell>
                           <TableCell className="border-red" align="left">
                              QUANTITY
                           </TableCell>
                           <TableCell className="border-red" align="right">
                              TOTAL
                           </TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {item.map((item, index) => (
                           <TableRow
                              key={index}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                           >
                              <TableCell>
                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    <Image
                                       src="https://zubbio-preyantechnosys.myshopify.com/cdn/shop/products/product02_c5ac6ca7-37b4-497d-9be6-63e3b0a77462.jpg?v=1673953758&width=300"
                                       alt=""
                                       width="100px"
                                       height="100px"
                                    />
                                    <Box>
                                       <Typography sx={{ color: 'common.black' }}>
                                          {item.title}
                                       </Typography>
                                       <Typography sx={{ color: 'common.black' }}>
                                          ${item.price}.00
                                       </Typography>
                                       <Typography sx={{ color: 'common.black' }}>
                                          Color: Blue
                                       </Typography>
                                    </Box>
                                 </Box>
                              </TableCell>
                              <TableCell>
                                 <QuantityButton
                                    quantity={item.quantity}
                                    decreaseQuantity={handle}
                                    increaseQuantity={handle}
                                 />
                              </TableCell>
                              <TableCell align="right">{item.price}</TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
            </Container>
         </Box>
      );
   }
   return <Container>Cart empty</Container>;
};

export default Cart;
