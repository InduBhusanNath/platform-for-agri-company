import { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    //`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`

    




function ProspectMessage(){
     const [ms1,setMs1]=useState('');
     const [msgdate]=useState(date);
     const [name,setName]=useState('');
     const [contactNo,setContactNo]=useState('');
     const [email,setEmail]=useState('');
     const [message,setMessage]=useState('');
     const form = useRef();

     function submitContactUsMessage(e){
        e.preventDefault();
        if(!name){
             setMs1("Enter Your Name.....");
             return;
        }else if(!contactNo){
             setMs1("Enter Your Conatct No.....");
             return;

        }
        
        emailjs
        .sendForm('service_', 'template_', form.current, {
          publicKey: '',
        })
        .then(
          () => {
                 setName('');
                 setContactNo('');
                 setEmail('');
                 setMessage('');
                 setMs1('Submitted Successfully.....');


            
          },
          (error) => {
                       setMs1('Failed, Try Again.....');
          },
        );
         
        
   }
     return(<>
         <div className="col-sm-12">
             <span className="small text-danger">{ms1}</span>
             <br/>
             <span className="font font20">Message Us Your Query, We Will Get Back to You.....</span>
             <form ref={form} onSubmit={submitContactUsMessage}>
                <div className="form-group">                     
                     <input type="hidden" className="form-control" name="n_date" value={msgdate}/>
                 </div>
                 
                 <div className="form-group">
                     <label>Name&#42;</label>
                     <input type="text" className="form-control" name="n_name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                 </div>
                 <div className="form-group">
                     <label>Mobile No&#42;</label>
                     <input type="text" className="form-control" name="n_contactno" value={contactNo} onChange={(e)=>{setContactNo(e.target.value)}}/>
                 </div>
                 <div className="form-group">
                     <label>EMail</label>
                     <input type="email" className="form-control" name="n_email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                 </div>
                 <div className="form-group">
                     <label>Message</label>
                     <textarea className="form-control" name="n_message" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>

                 </div>
                 <div className="form-group">
                     <button type="submit" className="submit">Send Message</button>
                 </div>

            </form>
             
        </div>
     
     </>);
}

export default function ContactUsMessage(){
    return(<>
          <div className="container-fluid">
                 <ProspectMessage/>
          </div>
    
    </>);
}