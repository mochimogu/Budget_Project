import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/error';
import TransactionForm from './pages/InsertTransaction';
import Overview from './pages/overview';

const routes = createBrowserRouter(
  [
    {
      path : '/',
      element : <App/>,
      errorElement : <NotFound/>,
      children : [
        {
          path : '/insert',
          errorElement : <NotFound/>,
          element : <TransactionForm/>
        },
        {
          path : '/overview',
          errorElement : <NotFound/>,
          element : <Overview/>
        },
      ]
    }
  ]
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
