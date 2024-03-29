import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Login from './page/Login';
import App from './App';
const router = createBrowserRouter([
  // {
  //   path: "login",
  //   element: <Login />,
  // },
  {
    path: "/",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
