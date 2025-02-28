import "./Connect.scss";

import whatsapp from "../../assets/images/whatsapp.svg";

const Connect = () => {
  return (
    <div className="connect">
      <h1>Connect with Us for the Best Home Design Experience</h1>
      <p>
        Reach out to us on WhatsApp or give us a call for the best home design
        experience. Our team is here to assist you with all your house plan and
        design needs.
      </p>

      <div className="connect-btns">
        <button>Contact Us</button>
        <button>
          <img src={whatsapp} alt="" />
          Whats App
        </button>
      </div>
    </div>
  );
};

export default Connect;
