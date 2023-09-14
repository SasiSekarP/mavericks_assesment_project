import Navbar from "./navbar";
import Commonfooter from "./commonfooter";

import bannerabout1 from "../asset/banner about 1.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <img src={bannerabout1} alt="bannerabout1" />
      <div className="AboutSoftomaticcontainer">
        <div className="AboutSoftomaticheading">About Softomatic</div>
        <p className="AboutSoftomaticpara">
          At Softomatic Technology Services, we are committed to connecting
          exceptional talent with top-notch companies to create a winning
          workforce. Our agency was founded on the principles of integrity,
          dedication, and a genuine passion for helping both employers and job
          seekers achieve their goals. With an unwavering focus on excellence
          and personalized service, we have established ourselves as a trusted
          partner in the recruitment industry
        </p>
      </div>

      <div className="aboutpageimgcontainer">
        <div className="aboutpageimgcontainerleft">Making a lasting impact</div>
        <div className="aboutpageimgcontainerright">
          Celebrating individuality
        </div>
      </div>
      <Commonfooter />
    </div>
  );
};

export default About;
