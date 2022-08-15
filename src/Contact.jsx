import React from "react";
import Navbar from "./Components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar name="Contact" />
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            quos ipsa at quod pariatur consectetur beatae esse voluptate?
            Consectetur delectus dolorum eius porro laudantium provident quis
            accusantium fugit quidem nobis?
          </p>
        </div>
        <div className="Container">
          <div className="ContactInfo">
            <div className="box">
              <div className="icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Adress</h3>
                <br />
                <p>4761 Qainchi Moor,</p>
                <p>Sargodha.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Container">
          <div className="ContactInfo">
            <div className="box">
              <div className="icon">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <br />
                <p>03092970488</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Container">
          <div className="ContactInfo">
            <div className="box">
              <div className="icon">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>E.Mail</h3>
                <br />
                <p>zohaibansar56@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Type Your Message...</span>
              </div>
            </form>
          </div>
        </div>
        <div className="inputBox">
          <input type="Submit" name="" value="Send" />
        </div>
      </section>
    </div>
  );
}

export default Contact;
