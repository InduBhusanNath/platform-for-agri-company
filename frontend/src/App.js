import './App.css';

import {BrowserRouter, Routes,Route} from "react-router-dom";
import HomePage from './Pages/homepage';
import AboutUs from './Pages/aboutus';
import Products from './Pages/products';
import ContactUs from './Pages/contactus';

 export default function App(){
     return(
         <>
            <BrowserRouter basename="/platform-for-agri-company">
                 <Routes>
                       <Route path="/" element={<HomePage/>}/> 
                       <Route path="/aboutus" element={<AboutUs/>}/> 
                       <Route path="/products" element={<Products/>}/> 
                       <Route path="/contactus" element={<ContactUs/>}/> 
                 </Routes>
            </BrowserRouter>

         </>
     );
}
