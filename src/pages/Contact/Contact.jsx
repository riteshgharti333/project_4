import "./Contact.scss";

import { RiCustomerService2Fill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <div className="contact-cards">
        <div className="contact-card">
          <RiCustomerService2Fill className="contact-icon" />
          <p>Consulting Enquiry</p>
          <p>+91 149508608</p>
        </div>
        <div className="contact-card">
          <IoCallSharp className="contact-icon" />
          <p>Toll Free Number</p>
          <p>+91 123456789</p>
        </div>

        <div className="contact-card">
          <MdEmail className="contact-icon" />
          <p>Email</p>
          <p>r@gmail.com</p>
        </div>
        <div className="contact-card">
          <FaLocationDot className="contact-icon" />
          <p>Address</p>
          <p>123, Delhi, India</p>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="contact-form">
          <p>If you have any queries then you can mail us.</p>
          <form>
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>

            <div className="form-group">
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="form-group">
              <input type="text" name="state" placeholder="State" required />
            </div>

            <div className="form-group">
              <input type="text" name="city" placeholder="City" required />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Sent Mail
            </button>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.951046296!2d76.76356261822156!3d28.644287349748506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1740804285967!5m2!1sen!2sin"
              height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
