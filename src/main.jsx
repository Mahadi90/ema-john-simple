import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './layout/Home.jsx'
import Shop from './components/Shop/Shop.jsx'
import Order from './components/Order/Order.jsx'
import Review from './components/checkout/Checkout.jsx'
import Inventory from './components/inventory/Inventory.jsx'
import Login from './components/login/Login.jsx'
import CartProductsLoaders from './loaders/cartProductsLoaders.js'
import Checkout from './components/checkout/Checkout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children : [
      {
        path: '/',
        element : <Shop></Shop>
      },
      {
        path : 'order',
        element : <Order></Order>,
        loader : CartProductsLoaders
      },
      {
        path : 'checkOut',
        element : <Checkout></Checkout>
      },
      {
        path : 'inventory',
        element : <Inventory></Inventory>
      },
      {
        path : 'login',
        element : <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
