import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import { store } from './store';
import App from './App.jsx';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/Cartscreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route index={true} path='/' element={<HomeScreen/>} />
      <Route path='/product/:id' element={<ProductScreen/>} />  
      <Route path='/cart' element={<CartScreen/>} />  

    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
