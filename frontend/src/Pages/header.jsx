import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import whatsapp from "./whatsapp.png";
export default function Header(){
     return(<>         
         <HeaderBar/>       
     </>);
}
function HeaderBar(){
     return(<>
           <div className="row padding10 bg-info d-sm-block d-md-none d-lg-none"><MobileMenu/></div>
           <div className="row background-peachpuff">
                <div className="col-sm-4 text-center">
                     <span className="font fomt20 fw-bold">&#128231;&nbsp;hello@gmail.com</span>  
                </div> 
                <div className="col-sm-4 text-center">
                     <span className="font fomt20 fw-bold">&#128222;&nbsp;(+91)8638283737&nbsp;|&nbsp;(+91)9387556009</span>
                </div> 
                <div className="col-sm-4 text-center">
                     <span className="font fomt20 fw-bold">&#128337;&nbsp;Office Hours: 9.30 AM to 6.30 PM (IST)</span>
                </div>             
           </div>
           <div className="row padding5 background-blanchedalmond">                 
                 <div className="col-sm-2"><Logo/></div>  
                 <div className="col-sm-7"><br/><Nav/></div>
                 <div className="col-sm-2"> 
                     <br/>                         
                     <button type="button" class="btn btn-warning"><Link to="/contactus" className="text-dark fw-b">Request a Quote</Link></button>
                 </div>
                 <div className="col-sm-1"><Whatsapp/></div>
          </div>
     </>);
         
}

function Nav(){
     return(<>
          <nav className="font font20 text-center d-none d-sm-none d-md-none d-lg-block">
              <ul>
                  <li><Link to="/" className="text-decoration-none text-dark">&#127968;HOME</Link></li>
                  <li><Link to="/aboutus" className="text-decoration-none text-dark">About Us</Link></li>
                  
                  
                  <li><Link to="/products" className="text-decoration-none text-dark">Products</Link></li>
                  <li><Link to="/contactus" className="text-decoration-none text-dark">Contact Us</Link></li>
              </ul>
          </nav>
     </>);
}


function Whatsapp(){
           return(<>
               <section className="text-center">
                     <a aria-label="Message" href="https://wa.me/918638283737?text=Please%20get%20back%20to%20me%20" className="whatsapp"><img src={whatsapp} alt="WA"/></a>
               </section>           
           </>);  
}
function MobileMenu(){
      const [mobMenu,setMobMenu]=useState('hidden');
      function showMobMenu(){
           setMobMenu('shown');
      }
      function hideMobMenu(){
           setMobMenu('hidden');      
      }
     return(<>
           
                <div className="col-sm-12">
                      <button className="show_btn" onClick={showMobMenu}>&equiv;</button>
                      <section className={mobMenu}>
                               <button className="hide_btn" onClick={hideMobMenu}>&#10060;</button>
                               <section className="container font font20">
                                    <section className="row">
                                         <section className="col-sm">
                                              <Link to="/" className="text-decoration-none text-dark">HOME</Link>
                                              <br/>
                                              <Link to="/aboutus" className="text-decoration-none text-dark">About Us</Link>
                                              <br/>
                                              <Link to="/products" className="text-decoration-none text-dark">Products</Link>
                                              <br/>
                                              <Link to="/contactus" className="text-decoration-none text-dark">Contact Us</Link>                                            
                                         </section>
                                         
                                    </section>
                               </section>
                     </section>
                </div>           
    </>);
}