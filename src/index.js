import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CustomerDetail from './components/details/CustomerDetail';
import Action from './components/action/Action';
import App2 from './components/tree1/App2';
import UploadExcel from './components/upload/uploadExcel';
import App from './App';
import CreateAction from './components/action/CreateAction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/home",
        element: <UploadExcel />,
      },
      {
        path: "/tree",
        element: <App2 />,
      },
      {
        path: "/action",
        element: <Action />,
        children:[
          // {
          //   path: "create-action",
          //   element: <CreateAction/>
          // },
        ]
      },
      {
        path: "/action/create-action",
        element: <CreateAction/>
      },
    ]
  },
  {
    path: "/log/:id",
    element: <CustomerDetail />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
