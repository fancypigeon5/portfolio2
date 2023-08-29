import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <main>
            <div className="contact">
                <div className="contact_form">
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your name..."/>

                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="The subject..." />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Your message..."></textarea>

                        <input type="submit" value="submit" />

                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact