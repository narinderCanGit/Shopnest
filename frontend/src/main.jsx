import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import {PayPalScriptProvider} from '@paypal/react-paypal-js';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import { store } from './store';
import App from './App.jsx';
import { Provider } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import OrderListScreen from './screens/admin/OrderListScreen.jsx';
import ProductListScreen from './screens/admin/ProductListScreen.jsx';
import ProductEditScreen from './screens/admin/ProductEditScreen.jsx';
import UserListScreen from './screens/admin/UserListScreen.jsx';
import UserEditScreen from './screens/admin/UserEditScreen.jsx';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen.jsx';
import { HelmetProvider } from 'react-helmet-async';
import MyErrorBoundary from './components/ErrorBoundary.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route index={true} path='/' element={<HomeScreen/>} />
      <Route path='/search/:keyword' element={<HomeScreen />} />
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen/>} />  
      <Route path='/cart' element={<CartScreen/>} /> 
      <Route path='/login' element={<LoginScreen/>} /> 
      <Route path='/register' element={<RegisterScreen/>} /> 
      <Route path='/forgotPassword' element={<ForgotPasswordScreen/>} /> 
      <Route path='' element={<PrivateRoute/>}>
        <Route path='/shipping' element={<ShippingScreen/>} />
        <Route path='/payment' element={<PaymentScreen/>} /> 
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<MyErrorBoundary> <OrderScreen /> </MyErrorBoundary>}/>
        <Route path='/profile' element={<MyErrorBoundary> <ProfileScreen /> </MyErrorBoundary>} />
      </Route>
      {/* Admin users */}
      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
        <Route path='/admin/productlist' element={<ProductListScreen />} />
        <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen />} />
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
        <Route path='/admin/userlist' element={<UserListScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true} >
          <MyErrorBoundary>
            <RouterProvider router={router} />
          </MyErrorBoundary>
        </PayPalScriptProvider>
      </Provider>
      </HelmetProvider>
  </React.StrictMode>,
);
