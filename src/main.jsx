import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import HomePage from "./Pages/HomePage.jsx"
import SearchProduct from "./Pages/SearchProduct.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import AddProduct from "./Pages/AddProduct.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
         index:true,
         element: <HomePage />
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path:"productpage/:id",
        element:<ProductPage />
      },
     {
        path:"productpage/",
        element:<ProductPage />
      },
      {
        path: "addproduct",
        element: <AddProduct />
      }
    ],
  },
   {
        path:"searchproduct",
        element:<SearchProduct />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
