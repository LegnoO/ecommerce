/** @format */
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material';

import productService from '~/services/productService';
import axios from 'axios';
// import httpRequest from "./services/apiService/httpRequest";
import themes from './themes';
import Routing from './router/Routing';

interface IProduct {
  id: string;
  username: string;
  password: string;
}

function App() {
  // const [test, setTest] = useState<IProduct[]>([]);

  // test?.map((item, index) => console.log(item));

  useEffect(() => {
    // const fetchProduct = async () => {
    //   const data = await productService.getProduct();
    //   setTest(data);
    // };
    // // fetchProduct();
    
    // axios.put('https://ecommerce-api-133d7-default-rtdb.firebaseio.com/products.json', {});
    // axios.post('https://ecommerce-api-133d7-default-rtdb.firebaseio.com/products.json', {
    //   id: 1,
    //   username: 'admin',
    //   password: 'admin'
    // });
    // axios.post('https://ecommerce-api-133d7-default-rtdb.firebaseio.com/products.json', {
    //   id: 2,
    //   username: 'empty',
    //   password: 'empty'
    // });
    // axios.post('https://ecommerce-api-133d7-default-rtdb.firebaseio.com/products.json', {
    //   id: 3,
    //   username: 'legno',
    //   password: '123456'
    // });
  }, []);

  return (
    <ThemeProvider theme={themes(0)}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
