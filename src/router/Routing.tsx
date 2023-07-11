/** @format */
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../Login';
import { ProductList, ProductDetail } from '~/layout/Product';
const Routing = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routing;
