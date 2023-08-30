import React, { useRef } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_v8bqrxk', 'template_b1h77pv', form.current, 'paVf-wqDGHJFPZbsT')
          .then((result) => {
            document.getElementById('form').reset();
            alert("Message Sent Successfully");
            console.log(result.text);
          }, (error) => {
            alert("error sending message");
            console.log(error.text);
          });
      };

    return (
        <div id='contact' className="contact">
            <div className="contact_welcome">
                <h1>Contact me</h1>
            </div>
            <div className="contact_form_wrap">
                <div className="contact_form">
                    <form id='form' ref={form} onSubmit={sendEmail}>
                        <label htmlFor="name" >Name</label>
                        <input name="name" type="text" id="name" placeholder="Your name..."/>

                        <label htmlFor="subject">Subject</label>
                        <input type="text" name='subject' id="subject" placeholder="The subject..." />

                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id="subject" placeholder="Your email..." />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Your message..."></textarea>

                        <input type="submit" value="submit" />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact