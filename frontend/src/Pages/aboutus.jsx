import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function AboutUs(){
     return(
         <>
             <HelmetProvider>
                 <TechnicalSEO/>
                 <div className="container-fluid">
                     <Header/>
                     <Banner/>
                     <BreadCrumb/>
                     <Body1/>
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
             <title>About Us</title>
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
                <img className="img-fluid shadow" alt="agri exporter" src={process.env.PUBLIC_URL + '/Images/AgriAboutUsBanner.png'} />
           </div>

         </div>
        
     </>);
}
function BreadCrumb(){
     return(<>
        <div className="row bg-light">
             <div className="col-sm-12">
                   <nav aria-label="breadcrumb">
                       <ol class="breadcrumb">
                           <li class="breadcrumb-item"><a href="/">Home</a></li>
                           <li class="breadcrumb-item active" aria-current="page">About Us</li>
                       </ol>
                   </nav>
             </div>
        </div>
     </>);
}
function Body1(){
     return(<>
       <div className="row bg-light">
           <div className="col-sm-1"></div>
           
           <div className="col-sm-10">
                 <h1>About Us</h1>
               <section className="font font24">
                   <p><b>Premier Agro Grains</b>,based in the northeastern part of India, exports agricultural commodities to various global markets. It supplies top-quality organic agricultural produce from Indian farms to markets worldwide through an efficient and modern supply chain.  </p>
                   <p>The commodities we export are from the best agricultural fields in India. We do the due diligence of choosing the best sources to ensure top-quality products. We have maintained an extended network of farmers who carry out organic farming practices without using chemical fertilizers and pesticides. As such, the agricultural products we export do not cause harm to human health and are nutritious. </p>
               </section>              

           </div>
           <div className="col-sm-1"></div>
       </div>
       <div className="row bg-light">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                  <section className="font font24">
                     
                     <p>In addition, our best-in-class supply chain infrastructure enables us to deliver export consignments with the least lead times. Also, we implement the best packaging solutions to preserve the originality of the products and prevent damage or losses during transit.</p>
                     <p>The key differentiators of our best-in-class agricultural commodities are high nutritional values, free of harmful chemicals, and freshness. In addition, our fair pricing policy ensures buyers of reasonable import costs.</p>

                  </section>
             </div>
             <div className="col-sm-1"></div>
        
       </div>
       <div className="row bg-light">
             <div className="col-sm-1"></div>
             <div className="col-sm-5">
                 <p className="font font24 fw-bold">Mission</p>
                 <p className="font font24">
                     <ul>
                         <li>To make available organically grown agricultural commodities in India in global markets</li>
                         <li>To practice the highest of sourcing, packaging, and delivering</li>
                     </ul>

                 </p>
             </div>
             <div className="col-sm-5">
                 <p className="font font24 fw-bold">Vision</p>
                 <p className="font font24">
                     <ul>
                         <li>To become a leading exporter of agricultural commodities while enabling Indian farmers to find customers in global markets</li>
                         <li>To set new standards in efficiency in the exports</li>
                     </ul>

                 </p>
             </div>
             <div className="col-sm-1"></div>
       </div>       
     </>);

}