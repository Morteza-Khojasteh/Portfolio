import React from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [send, setSend] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qgnrvri",
        "template_azjnzpa",
        formRef.current,
        "user_CKHtPoGm13a7XUptKz3f5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="" className="contact-icon" />
              +4473000 00 00
            </div>
            <div className="contact-info-item">
              <img src={Email} alt="" className="contact-icon" />
              morteza.khojaste@gmail.com
            </div>
            <div className="contact-info-item">
              <img src={Address} alt="" className="contact-icon" />
              UK, Manchester
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="user_message" />
            <button>Submit</button>
            { send && "I Received Your Message"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
