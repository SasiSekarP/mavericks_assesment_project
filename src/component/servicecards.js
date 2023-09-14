import image24 from "../asset/image 24.png";
import image23 from "../asset/image 23.png";
import image25 from "../asset/R.png";
import openinnewfile from "../asset/open_in_newfile.png";

const ServiceCards = () => {
  return (
    <div className="servicecardcontainer">
      <div className="servicecardwhitebox">
        <div className="servicefirstcard servicecard">
          <img src={image24} alt="image24" className="servicecardimage" />
        </div>
        <div className="servicecardheading">RPO</div>
        <div className="servicecardlastrow">
          <div className="servicecardpara">
            End-to-end outsourced recruitment solutions.
          </div>
          <img className="openinnewfile" src={openinnewfile} alt="icon" />
        </div>
      </div>
      <div className="servicecardwhitebox">
        <div className="servicesecondcard servicecard">
          <img src={image23} alt="image24" className="servicecardimage" />
        </div>
        <div className="servicecardheading">Hire-Train- Deploy</div>
        <div className="servicecardlastrow">
          <div className="servicecardpara">
            Unlocking Human Potential for Seamless Success
          </div>
          <img className="openinnewfile" src={openinnewfile} alt="icon" />
        </div>
      </div>
      <div className="servicecardwhitebox">
        <div className="servicecard servicethirdcard">
          <img src={image25} alt="image24" className="servicecardimage" />
        </div>
        <div className="servicecardheading">Assessment Services</div>
        <div className="servicecardlastrow">
          <div className="servicecardpara">
            Testing and evaluating candidate skills.
          </div>
          <img className="openinnewfile" src={openinnewfile} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
