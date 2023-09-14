import Navbar from "./navbar";
import Commonfooter from "./commonfooter";
import ServiceCards from "./servicecards";

import cc1 from "../asset/cc 1.png";

const Services = () => {
  return (
    <div className="herocontainer">
      <Navbar />
      <img src={cc1} alt="cc1" />
      <ServiceCards />
      <div className="serviceareaservicecardpaddingarea"></div>
      <div className="servicesconnectwithsoftomaticcontainer">
        <div className="connectwithsoftomatic">
          <div className="blackcontainer">
            <div className="connectwithsoftomaticheading">
              Connect with SOFTOMATIC
            </div>
            <div className="connectwithsoftomaticsubheading">
              Be part of our journey to make a difference.
            </div>
            <div className="gettoknowusbtncontainer">
              <button type="button" className="gettoknowusbtn">
                <div className="gettoknowusbtntxt">Contact US</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Commonfooter />
    </div>
  );
};

export default Services;
