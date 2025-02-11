import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function Products(){
     return(
           <>   
               <HelmetProvider>
                     <TechnicalSEO/>
                     <div className="container-fluid bg-body">
                          <Header/>
                          <Banner/>
                          <BreadCrumb/> 
                          <ProductSlogan/>
                          <BlackRice/>
                          <BrownRice/>
                          <GreenTea/> 
                          <OurProductBenefits/>                    
                          <Footer/>
                     </div>

               </HelmetProvider>
                
          </>
     );
}
//Technical SEO
function TechnicalSEO(){
     return(<>
         <Helmet>
             <title>Products</title>
             <meta name="description" content=""/>
             <link rel="canonical" href="" />
         </Helmet>
     </>);
}

//Banner
function Banner(){
     return(<>
         <div className="row">
             <div className="col-sm-12 m-0 p-0">
                <img className="img-fluid shadow" alt="agri exporter" src={process.env.PUBLIC_URL + '/Images/AgriProductBanner.png'} />
           </div>

         </div>
        
     </>);
}
//Breadcrumb
function BreadCrumb(){
     return(<>
        
        <div className="row bg-light">
             <div className="col-sm-12">
                   <nav aria-label="breadcrumb">
                       <ol class="breadcrumb">
                           <li class="breadcrumb-item"><a href="/">Home</a></li>
                           <li class="breadcrumb-item"><a href="/aboutus">About Us</a></li>
                           <li class="breadcrumb-item active" aria-current="page">Products</li>
                       </ol>
                   </nav>
             </div>
        </div>
     </>);
}
//Slogan
function ProductSlogan(){
      return(<>
           <div className="row bg-light">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">Our Products</h1>
                     <p className="font font24 text-center">Top-Quality Organic Agro Products Straight from Indian Farms</p>
                </div>
                <div className="col-sm-1"></div>
           </div>
           
      
      </>);
}
//Green Tea
function GreenTea(){
      return(<>
           <div className="row bg-light p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-3 p-0 m-0">
                     <img className="img-fluid shadow rounded-circle" alt="agri exporter" src={process.env.PUBLIC_URL + '/Images/greentea-product.png'} />
                </div>
                <div className="col-sm-7">
                     <h2 className="text-center">Green Tea</h2>
                     <p>
                          <div className="table">
                               <tr>
                                    <td className="font font22 fw-semibold">Country of Origin:</td>
                                    <td className="font font22">India</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Uses:</td>
                                    <td className="font font22">Human consumption</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Cultivation:</td>
                                    <td className="font font22">Organic(Without artificial fertilizers)</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Features:</td>
                                    <td className="font font22">Good flavour, health benefits</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Packaging:</td>
                                    <td className="font font22">Plastic Bags</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Payment Type:</td>
                                    <td className="font font22">TT,Others</td>
                               </tr>
                          </div>                         
                     </p>
                </div>                
                <div className="col-sm-1"></div>
           </div>
      
      </>);
}
//Black Rice
function BlackRice(){
     return(<>
          <div className="row bg-light p-3">
               <div className="col-sm-1"></div>
               <div className="col-sm-3 p-0 m-0">                     
                     <img className="img-fluid shadow float-left rounded-circle" alt="agri exporter" src={process.env.PUBLIC_URL + '/Images/blackrice-product.png'} />                     
               </div>
               <div className="col-sm-7">
                     <h2 className="text-center">Black Rice</h2>
                     <p>
                          <div className="table">
                               <tr>
                                    <td className="font font22 fw-semibold">Country of Origin:</td>
                                    <td className="font font22">India</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Uses:</td>
                                    <td className="font font22">Human consumption</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Cultivation:</td>
                                    <td className="font font22">Organic(Without artificial fertilizers)</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Features:</td>
                                    <td className="font font22">No preservatives, No artificial color, High in nutrition</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Packaging:</td>
                                    <td className="font font22">Plastic Bags</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Payment Type:</td>
                                    <td className="font font22">TT,Others</td>
                               </tr>
                          </div>                         
                     </p>
               </div>
               <div className="col-sm-1"></div>               
          </div>
     
     </>);
}
//Brown rice
function BrownRice(){
     return(<>
          <div className="row bg-light p-3">
               <div className="col-sm-1"></div>
               <div className="col-sm-3 p-0 m-0">
                     <img className="img-fluid shadow rounded-circle" alt="agri exporter" src={process.env.PUBLIC_URL + '/Images/brownrice-product.png'} />
               </div>
               <div className="col-sm-7">
               <h2 className="text-center">Brown Rice</h2>
                     <p>
                          <div className="table">
                               <tr>
                                    <td className="font font22 fw-semibold">Country of Origin:</td>
                                    <td className="font font22">India</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Uses:</td>
                                    <td className="font font22">Human consumption</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Cultivation:</td>
                                    <td className="font font22">Organic(Without artificial fertilizers)</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Features:</td>
                                    <td className="font font22">No preservatives, No artificial color, High in nutrition</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Packaging:</td>
                                    <td className="font font22">Plastic Bags</td>
                               </tr>
                               <tr>
                                    <td className="font font22 fw-semibold">Payment Type:</td>
                                    <td className="font font22">TT,Others</td>
                               </tr>
                          </div>                         
                     </p>

               </div>                    
               <div className="col-sm-1"></div>
          </div>
     
     </>)};
//Benefits
function OurProductBenefits(){
      return(<>
           <div className="row bg-light">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                    <h2 className="text-center">Our Product Benefits</h2>                    
               </div>
               <div className="col-sm-1"></div>
           </div>  
           <div className="row bg-light">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <h3>Black Rice</h3> 
                     <p className="font font22">
                          Black Rice is high in nutritional value. It is a rich constituent of antioxidants, especially anthocyanins, along with other dietary elements. The presence of anthocyanins gives black rice its black color. Black Rice is also called forbidden rice.
                     </p>
                     <p className="font font22">
                          Its consumption can entail the following advantages:
                     </p>  
                     <p className="font font22">
                          <ul>
                               <li>Stress reduction and prevention of heart diseases due to antioxidants</li>
                               <li>Lowering cholesterol</li>
                               <li>Maintaining the appropriate levels of blood sugar due to high fiber content</li>
                               <li>Easing digestion</li>
                          </ul>
                     </p>        
                     <h3>Brown Rice</h3> 
                     <p className="font font22">
                          It is a whole grain rice. Only its inedible outer hull is removed. Its fibrous barn and nutritious germ layer stay intact. These layers contain most of its vitamins and minerals. Due to its tough barn exterior, Brown Rice's cooking time is less.
                     </p>
                     <p className="font font22">
                          Brown Rice's benefits are:
                     </p>  
                     <p className="font font22">
                          <ul>
                               <li>Helps to control blood sugar</li>
                               <li>Source of antioxidants</li>
                               <li>Helps to manage weight</li>
                               <li>Supports heart health</li>
                               <li>Helps to improve digestion</li>
                          </ul>
                     </p>  
                     <h3>Green Tea</h3> 
                     <p className="font font22">
                          Green Tea is processed from the leaves of the Camellia sinensis plant. Its aroma and taste are fantastic.
                     </p>
                     <p className="font font22">
                          Green Tea's advantages:
                     </p>  
                     <p className="font font22">
                          <ul>
                               <li>Reduces risks of chronic diseases</li>
                               <li>Help to manage body weight</li>
                               <li>Maintain heart health</li>
                               <li>Help to lower blood sugar</li>                               
                          </ul>
                     </p>               
               </div>
               <div className="col-sm-1"></div>
           </div>      
      </>);
}