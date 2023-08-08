/** @format */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { IRoutes } from '~/types/IRoutes';
import { Cart } from '~/layouts';
import ProductList, { ProductDetail } from '~/layouts/Product';
import DefaultLayout from '~/layouts/DefaultLayout';
import Home from '../views/HomeView';
import { Login } from '~/layouts/User';

const Routing = () => {
  const routesConfig: IRoutes[] = [
    { path: '/', component: <Home /> },
    { path: '/login', component: <Login />, layout: null },
    { path: '/product', component: <ProductList /> },
    { path: '/product/:id', component: <ProductDetail /> },
    { path: '/cart', component: <Cart /> }
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routesConfig.map((route, index) => {
          const Layout = (route.layout === null ? Fragment : route.layout) || DefaultLayout;
          const Component = route.component;
          return (
            <Route key={index}>
              <Route key={index} path={route.path} element={<Layout>{Component}</Layout>} />
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
