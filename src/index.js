import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Signup } from './signup.js';
import { Homepage } from './homepage.js';
import { Login } from './login.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Products } from './products';
import { Productscart } from './totalcart';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  HashRouter
} from "react-router-dom";

const token=localStorage.getItem("Ecom_token");

const router = createBrowserRouter([
  {
    path: "/",
    element: token ? <Navigate to="/Productfeed"></Navigate>:<Homepage/>
  },
  {
    path:"/signup",
    element: token ? <Navigate to="/Productfeed"></Navigate>:<Signup/>
  },
  {
    path:"/login",
    element: token ? <Navigate to ="/Productfeed"></Navigate>:<Login/>
  },
  {
    path:"/Productfeed",
    element: token ? <Products/> : <Navigate to="/login"></Navigate>
  },
  {
    path:"/Productscart",
    element: token ? <Productscart/> : <Navigate to="/login"></Navigate>

  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
   <RouterProvider router={router} />
   </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
