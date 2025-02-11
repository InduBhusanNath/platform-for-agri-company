import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router-dom";

export default function HomePage(){
     return(
         <> 
             <HelmetProvider>
                 <TechnicalSEO/>
                 <div className="container-fluid">
                     <Header/>
                     <HomePageBanner/>
                     <Body1/>
                     <Body2/>
                     <Body3/>                 
                     <ProductHeading/>
                     <Products/>
                     <Body4/>
                     <Footer/>             
                 </div>
             </HelmetProvider>             
         </>)
}
//Technical SEO
function TechnicalSEO(){
     return(<>
         <Helmet>
             <title>Premier Agro Grains</title>
             <meta name="description" content=""/>
             <link rel="canonical" href="" />
         </Helmet>
     </>);
}

//Banner
function HomePageBanner(){
     return(<>
         <div className="row">             
             <div className="col-sm-12 p-0 m-0">
                     <img src={process.env.PUBLIC_URL + '/Images/AgriHomeBannerFinal.webp'} className="img-fluid w-100" alt="agro commodities"/>
                </div>
             </div> 
     </>);
}
//Body 1
function Body1(){
     return(<>
         <div className="row bg-light">
             <div className="col-sm-1"></div>             
             <div className="col-sm-10 p-3">
                  <h1 className="font text-center">Who We Are, and What We Do</h1>                                 
             </div>
             <div className="col-sm-1"></div>
         </div>
         <div className="row bg-light">
             <div className="col-sm-1"></div>             
             <div className="col-sm-10 p-3">
                 <section className="font font24">
                     <p>We are a dedicated exporter of agricultural commodities to global markets. We are from India and operate from the northeastern part of the country. Our supply of fresh and organically grown produce depends on our commitment to feeding global consumers nutritious food free of harmful chemical content due to fertilizers. We run our operations with customer-centric policies. Customer satisfaction is at the top of our priority list. For that, we refrain from supplying low-quality products, asking for excessive prices, or delivering consignments late.[<Link to="/aboutus" className="text-decoration-none text-dark"><b>More&#187;</b></Link>]</p>
                     <br/>
                     
                 </section>                                 
             </div>
             <div className="col-sm-1"></div>
         </div>
     </>);
}
//Body2
function Body2(){
     return(<>
         <div className="row bg-light p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                 <h2 className="font text-center">Why Choose Us?</h2> 
                 <section>
                     <p className="font font24">You seem to care for your health as much as we do. Selecting us can allow you to attain your dietary objective. </p>
                 </section>                
             </div>
             <div className="col-sm-1"></div>
         </div>
         
     </>);
}
//Body3
function Body3(){
     return(<>
         <div className="row bg-light">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                 <div className="card-group rounded shadow">                     
                     <div className="card bg-info-subtle border-top-0 border-start-0 border-bottom-0 border-end-0">
                         
                         <div className="card-body">
                            <tr>
                                 <td className="font font22 border-0 p-1">&#9989;</td>
                                 <td className="font font22 border-0 p-1 fw-bold text-center">100% Organic</td>
                             </tr>
                             <tr>
                                 <td className="font font22 border-0 p-1">&nbsp;</td>
                                 <td className="font font22 border-0 p-1">
                                      Our agricultural products are organic. We supply from local farms in India that do not use chemical fertilizers. Such products are health friendly. 
                                 </td>
                             </tr>
                         </div>
                     </div>
                     <div className="card bg-info-subtle border-top-0 border-start-0 border-bottom-0 border-end-0">
                         <div className="card-body">
                            <tr>
                                 <td className="font font22 border-0 p-1">&#9989;</td>
                                 <td className="font font22 border-0 p-1 fw-bold text-center">Timely Delivery</td>
                             </tr>
                             <tr>
                                 <td className="font font22 border-0 p-1">&nbsp;</td>
                                 <td className="font font22 border-0 p-1">
                                      We spring into action once we receive your order. We are never late in despatching your consignment. It will arrive on time. We serve you timely. 
                                 </td>
                             </tr>
                         </div>
                     </div>
                     <div className="card bg-info-subtle border-top-0 border-start-0 border-bottom-0 border-end-0">
                         <div className="card-body">
                            <tr>
                                 <td className="font font22 border-0 p-1">&#9989;</td>
                                 <td className="font font22 border-0 p-1 fw-bold text-center">Reasonable Pricing</td>
                             </tr>
                             <tr>
                                 <td className="font font22 border-0 p-1">&nbsp;</td>
                                 <td className="font font22 border-0 p-1">
                                      Giving the value of their money to customers is one of our core business tenets. We do not price our products excessively. 
                                 </td>
                             </tr>
                         </div>                         
                     </div>
                     <div className="card bg-info-subtle border-top-0 border-start-0 border-bottom-0 border-end-0">
                         <div className="card-body">
                            <tr>
                                 <td className="font font22 border-0 p-1">&#9989;</td>
                                 <td className="font font22 border-0 p-1 fw-bold text-center">Trust</td>
                             </tr>
                             <tr>
                                 <td className="font font22 border-0 p-1">&nbsp;</td>
                                 <td className="font font22 border-0 p-1">
                                     Our transparency, clear documentation, strict quality control, and full traceability render us a trusted supplier.  Consumers can bank upon us.
                                 </td>
                             </tr>
                         </div>                         
                     </div>
                 </div>                    
             </div>                
             <div className="col-sm-1"></div>

            
         </div>     
     </>);
}
//ProductHeading
function ProductHeading(){
     return(<>
         <div className="row bg-light p-3">
             <div className="col-sm-3"></div>
             <div className="col-sm-6">
                 <h2 className="text-center">Our Products</h2>
                 <p className="font font24">
                   100% Organic Agro Products, Sourced Directly from Local Farms 
                </p>
             </div>
             <div className="col-sm-3"></div>
         </div>     
     </>);
}
//Products
function Products(){
     return(<>
         <div className="row bg-light">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                 <div className="card-group">
                     <div className="card bg-transparent border-0 p-2">
                         <Link to="/products" className="link-dark text-decoration-none">
                             <img src={process.env.PUBLIC_URL + '/Images/BlackRice.webp'} className="img-fluid w-100 rounded-circle shadow" alt="Black Rice Export"/>
                             
                         </Link>
                         
                     </div>
                     <div className="card bg-transparent border-0 p-2">
                        <Link to="/products" className="link-dark text-decoration-none">
                             <img src={process.env.PUBLIC_URL + '/Images/BrownRice.webp'} className="img-fluid w-100 rounded-circle shadow" alt="Black Rice Export"/>
                             
                         </Link>                        
                     </div>
                     <div className="card bg-transparent border-0 p-2">
                        <Link to="/products" className="link-dark text-decoration-none">  
                             <img src={process.env.PUBLIC_URL + '/Images/GreenTea.webp'} className="img-fluid w-100 rounded-circle shadow" alt="Black Rice Export"/>
                                 
                         </Link>
                     </div>
                </div>
             </div>
             <div className="col-sm-1"></div>
         </div>     
     </>);
}
//Body4
function Body4(){
    return(<>
        <div className="row bg-light p-3">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <h2 className="font text-center">Our Philosophy</h2> 
                <section>
                    <p className="font font24">
                          At Premier Agro Grains, we abide by the philosophy of keeping the customer at the center of everything we do. Our prime objective is to create the maximum value for the customer. As such, we offer them reasonable pricing and safe products. We export 100% organic agricultural commodities from local farms in India. 
                     </p>
                     <p className="font font24">
                         Ensuring timely delivery is our commitment to customers. We refrain from overrunning the delivery schedule unless constrained by unforeseen circumstances.  
                     </p>
                     <p className="font font24">
                          We quote reasonable prices. As such, customers get the full value of their money.  
                     </p>
                </section>                
            </div>
            <div className="col-sm-1"></div>
        </div>
        
    </>);
}