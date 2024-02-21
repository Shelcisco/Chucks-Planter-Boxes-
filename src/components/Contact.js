 import React, { useState } from "react"; 
 import emailjs from 'emailjs-com';


 function Contact() {

     const validEmail = new RegExp(
         '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
     var [email,setEmail] = useState ("");
     var [emailError,setEmailError] = useState (false);
     function validateEmail () {
         setEmailError (!validEmail.test(email))
     }

     var [name,setName] = useState ("");
     var [nameError,setNameError] = useState (false);
     function validateName () {
         setNameError (name.trim()=="")

     }

     var [message,setMessage] = useState ("");
     var [messageError,setMessageError] = useState (false);
     function validateMessage () {
         setMessageError (message.trim()=="")

     }


   //Validation functions and submit handler
//   const validateEmail = () => {
//      setEmailError(!validEmail.test(email));
//  };

//  const validateName = () => {
//      setNameError(name.trim() === "");
//  };

//  const validateMessage = () => {
//      setMessageError(message.trim() === "");
//  };

 const handleSubmit = (event) => {
     event.preventDefault();

     validateEmail();
     validateName();
     validateMessage();

     if (emailError || nameError || messageError) {
         return;
     }

     const templateParams = {
         email: email,
         name: name,
         message: message,
     };

     emailjs
         .send('service_ai8g391', 'template_bnru5cc', templateParams, 'IWz1OiJF9cOM3KUuc')
         .then((response) => {
             console.log('SUCCESS!', response.status, response.text);
             alert('Email sent successfully');
         }, (error) => {
             console.log('FAILED...', error);
             alert('Failed to send email. See console for more details.');
         });
 };

 // JSX for the contact form
 return (
     <form className="justify-center" onSubmit={handleSubmit}>
         <h1>Contact</h1>
         <input className="form-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={validateEmail}>
         </input>
         {emailError && <h5 className="error">Please enter a valid email</h5>}
         <br></br>
         <input className="form-input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                onBlur={validateName}>
         </input>
         {nameError && <h5 className="error">Please enter name</h5>}
         <br></br>
         <input className="form-input"
                type="text"
                placeholder="Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onBlur={validateMessage}>
         </input>
         {messageError && <h5 className="error">Please enter a message</h5>}
         <br></br>
         <button type="submit" className="btn">Submit</button>
         <br></br>
     </form>
   );
 };

 export default Contact;
