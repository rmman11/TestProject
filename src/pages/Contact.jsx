import React from 'react'
import useDocumentTitle from "../components/useDocumentTitle"
import ContactForm from '../components/ContactForm';

const Contact = () => {
  useDocumentTitle("Contact")
    return( 
    <div className='container'>
    <h1 className='text-center'>React Contact Form</h1>
    <ContactForm />
  </div>
  );
  };
  
  export default Contact;