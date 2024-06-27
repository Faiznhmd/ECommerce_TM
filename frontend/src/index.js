import React from 'react';
import ReactDOM from 'react-dom/client';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css';
import './assets/bootstrap.custom.css';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import store from './store.js';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen.jsx';
import Login from './screen/Login.jsx';
import Register from './screen/Register.jsx';
import Profile from './screen/Profile.jsx';
import ShippingScreen from './screen/ShippingScreen.jsx';
import PrivateRoutes from './component/PrivateRoutes.jsx';
import Payment from './screen/Payment.jsx';
import PlaceOrderScreen from './screen/PlaceOrderScreen.jsx';
import OrderScreen from './screen/OrderScreen.jsx';
import AdminRoutes from './component/AdminRoute.jsx';
import OrderList from './screen/admin/OrderList.jsx';
import ProductList from './screen/admin/ProductList.jsx';
import UsersList from './screen/admin/UsersList.jsx';
import ProductEditScreen from './screen/admin/ProductEditScreen.jsx';
import UserEditScreen from './screen/admin/UserEditScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />

      {/* //Private Routes */}

      <Route path="" element={<PrivateRoutes />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
      </Route>

      <Route path="" element={<AdminRoutes />}>
        <Route path="/admin/orderlist" element={<OrderList />} />
        <Route path="/admin/productlist" element={<ProductList />} />
        <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
        <Route path="/admin/userlist" element={<UsersList />} />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
