import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/edusity_assets/msg-icon.png";
import mail_icon from "../../assets/edusity_assets/mail-icon.png";
import phone_icon from "../../assets/edusity_assets/phone-icon.png";
import location_icon from "../../assets/edusity_assets/location-icon.png";
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ffc23a7b-62a5-47b4-ae0a-7c3418e0bec3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel Free to reach out through contact from or find our contact
          information below. Your feedback, question, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>

        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            Contact@Aastha.dev
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +91 111-222-3333
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            GCET, Greater Noida <br />
            201310, Uttar Pradesh
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phome Number</label>
          <input
            type="tel"
            mane="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea name="message" id="" rows="6" required></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
