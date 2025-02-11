import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router-dom";
import ContactUsMessage from "./contactus-messages";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

export default function ContactUs(){
       return(<>
          <HelmetProvider>
                 <TechnicalSEO/>
                <div className="container-fluid">                         
                         <Header/>
                         <Banner/>
                         <BreadCrumb/>
                         <Body/>
                         <Footer/>                
                 </div>

          </HelmetProvider>
       
       </>);
}
//Technical SEO
function TechnicalSEO(){
     return(<>
         <Helmet>
             <title>Contact Us</title>
             <meta name="description" content=""/>
             <link rel="canonical" href="" />
         </Helmet>
     </>);
}

//Banner
function Banner(){
        return(<>
                 <div className="row p-0">
                         <div className="col-sm-12 p-0 m-0">
                                 <img src={process.env.PUBLIC_URL + '/Images/AgriContactUs.webp'} className="img-fluid w-100" alt="agro commodities"/>
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
                              <li class="breadcrumb-item"><a href="/products">Products</a></li>
                              <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                          </ol>
                      </nav>
                </div>
           </div>
        </>);
   }

//Body
function Body(){
         return(<>
                 <div className="row bg-light">
                         <div className="col-sm-2"></div>
                         <div className="col-sm-8 padding25">
                                 <h1> Let Us Know Your Purchase Requirements. We are Eager to Fulfill Them.</h1>
                         </div>
                         <div className="col-sm-2"></div>
                </div>
                <div className="row bg-light">
                         <div className="col-sm-2"></div>
                         <div className="col-sm-4 padding25">
                                 <section className="background-lightskyblue padding10 rounded shadow">
                                         <ContactUsMessage/>
                                 </section>
                         </div>
                         <div className="col-sm-4">
                                 <section className="font font24 padding25">
                                        <p> &#127968;<br/>
                                        Assam
                                        </p>
                                        <p>&#128241;<br/>
                                        (+91)8638283737&nbsp;|&nbsp;(+91)9387556009
                                        </p>
                                        <p>&#128231;<br/>
                                        info@gmail.com
                                        </p>
                                 </section>
                                 <section className="padding25">
                                         <a href="#" target="_blank" rel="noreferrer" className="text-decoration-none"><FontAwesomeIcon icon={faFacebook}/></a>
                                          &nbsp;&nbsp;
                                         <FontAwesomeIcon icon={faTwitter} />
                                         &nbsp;&nbsp;
                                         <FontAwesomeIcon icon={faLinkedin} />
                                         &nbsp;&nbsp;
                                         <FontAwesomeIcon icon={faYoutube} />
                                         &nbsp;&nbsp;
                                         <FontAwesomeIcon icon={faInstagram} />
                                 
                                 </section>
                         </div>
                         <div className="col-sm-2"></div>
                </div>
        
         </>);
}