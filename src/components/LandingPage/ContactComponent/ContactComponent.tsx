import React from 'react';
import './ContactComponent.scss'

// Import Image
import contactImage from "../../../assets/img/contact.PNG";

export default function
    () {
    return (
        <div className="contact-container">
            <div className="contact-info">
                {/* <!-- Add your map, image, or details here --> */}
                <h3>Let's talk about evrything!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab impedit velit, sit dolorum, animi mollitia ex enim nobis excepturi itaque adipisci deserunt id vel voluptatem laboriosam iste expedita? Dolores?</p>
                <img src={contactImage} alt="Contact Information or Map" />
            </div>
            <div className="contact-form-container">
                <form className="contact-form">
                    <div className="input-group">
                        <input type="text" name="name" required />
                        <label htmlFor="name">Your Name</label>
                    </div>
                    <div className="input-group">
                        <input type="email" name="email" required />
                        <label htmlFor="email">Your Email</label>
                    </div>
                    <div className="input-group">
                        <textarea name="message" required></textarea>
                        <label htmlFor="message">Your Message</label>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>

    )
}
