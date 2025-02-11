import { Link } from "react-router-dom";
export default function Logo(){
     return(<>
         <section className="text-center padding10">
             <Link to="/" className="text-decoration-none"><img className="img-fluid" alt="agro exporter" src={process.env.PUBLIC_URL + '/Images/agriLogo.webp'} /></Link>                
         </section>
     </>);
}