import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa6";

const Commonfooter = () => {
  return (
    <div className="commonfootercontainer">
      <div className="commonfooterheading">SOFTOMATIC TECHNOLOGY SERVICES</div>
      <br />
      <div className="heropagefootercolumn commonfooteraddress">
        <div>
          501, Maple Homes, Gopal Nagar Society, KPHB, Hyderabad, Telengana,
          India - 500085
        </div>
        <div>Mobile: +91-8499987080 &emsp; Email: info@softomatic.co.in</div>
      </div>
      <div className="commonfootersubheading">SOCIAL MEDIA</div>
      <div className="heropagefootersocialmediacontainer">
        <div className="herofootersocialmediaicon facebook">
          <FaFacebookF />
        </div>
        <div className="herofootersocialmediaicon twitter">
          <FaTwitter />
        </div>
        <div className="herofootersocialmediaicon instagram">
          <FaInstagram />
        </div>
        <div className="herofootersocialmediaicon linkedIn">
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Commonfooter;
