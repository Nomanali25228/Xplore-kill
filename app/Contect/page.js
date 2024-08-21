import React from 'react'
import Header from '../component/headerCard/Header'

export default function page() {
    return (
        <div>
            <Header tital="CONTACT US" />


            <section class="loacation">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.67679704247814!2d73.07841490458816!3d31.473896599919875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922420fafea2977%3A0x3428af14dcc82945!2sAl-Falah%20Hospital!5e0!3m2!1sen!2s!4v1711708940263!5m2!1sen!2s"
                    width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
            </section>

            <section class="contact-us">
                <div class="row">
                    <div class="content-col">
                        <div>
                            <i class="fa fa-home"></i>
                            <span>
                                <h5>faisalabad </h5>
                                <p>Al-Falah Hospital</p>
                            </span>
                        </div>
                        <div>
                            <i class="fa fa-phone"></i>
                            <span>
                                <h5>+92 3057184701</h5>
                                <p>Monday To Saturday, 9AM To 6PM</p>
                            </span>
                        </div>
                        <div>
                            <i class="fa fa-envelope"></i>
                            <span>
                                <h5>xyz@email.com</h5>
                                <p>Email Us Yor Query</p>
                            </span>
                        </div>
                    </div>
                    <div class="content-col">
                        <form>
                            <input type="text" placeholder="Enter Name" required />
                            <input type="email" placeholder="Enter Email" required />
                            <input type="text" placeholder="Enter Subject" required />
                            <textarea rows="8" placeholder="Message" required></textarea>
                            <button type="submit" class="hero_btn btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>


        </div>
    )
}
