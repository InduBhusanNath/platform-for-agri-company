import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import Logo from "./logo";
export default function Footer(){
     return(<>
                 <Foot/>
                 <CopyRight/>
     </>);
}
function Foot(){
     return(<>
         <row className="row background-peachpuff padding25">
                 <div className="col-sm-3">
                         <section className="padding5 text-center">
                                 <Logo/>
                         </section>
                         
                         
                 </div>
                 <div className="col-sm-3">
                         <section>
                                 <p className="font font24 fw-bold">ABOUT US</p>
                                 <p className="font font22">Premier Agro Grains is a trusted exporter of agricultural commodities. We ensure the best quality and timely dispatch. </p>                             
                         </section>
                 </div>
                 <div className="col-sm-3">
                         <section>
                             <p className="font font24 fw-bold">USEFUL LINKS</p>
                                                 &#10132;&nbsp;<Link to="/" className="text-decoration-none text-dark">HOME</Link>
                                                 <br/>
                                                 &#10132;&nbsp;<Link to="/aboutus" className="text-decoration-none text-dark">About Us</Link>
                                                 <br/>
                                                 &#10132;&nbsp;<Link to="/products" className="text-decoration-none text-dark">Products</Link>
                                                 <br/>
                                                 &#10132;&nbsp;<Link to="/contactus" className="text-decoration-none text-dark">Contact Us</Link>

                         </section>
                 </div>
                 <div className="col-sm-3">
                         <section>
                                 <p className="font font24 fw-bold">QUICK CONNECT</p>
                                 
                                 <p>&#128241;&nbsp;&nbsp;
                                         (+91)8638283737&nbsp;|&nbsp;(+91)9387556009
                                 </p>
                                 <p>&#128231;&nbsp;&nbsp;
                                         info@gmail.com
                                 </p>                                
                                 
                         </section>
                         <section className="padding5">
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
         </row>
     </>);
}
{/*Copyright*/}
function CopyRight(){
         return(<>
                 <div className="row background-peachpuff">
                         <div className="col-sm-4"></div>
                         <div className="col-sm-4">
                                 <section className="font font12">
                                    All Rights Reserved &#124;&nbsp;Terms of Use&#124;&nbsp;Privacy Policy
                                 </section>
                         </div>
                          <div className="col-sm-4"></div>                          
                 </div>
         </>);
}