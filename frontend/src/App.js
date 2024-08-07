import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 import HomePage from './Pages/homepage';
 import AboutUs from './Pages/aboutus';
 import Products from './Pages/products';
 import ContactUs from './Pages/contactus';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/aboutus",
    element: <AboutUs/>
  },
  {
    path: "/products",
    element: <Products/>
  },
  {
    path: "/contactus",
    element: <ContactUs/>
  }
]);

export default function App(){
     return(
         <>
            <RouterProvider router={router} />
         </>
     );
}
