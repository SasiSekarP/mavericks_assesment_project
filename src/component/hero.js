import Navbar from "./navbar";
import ServiceCards from "./servicecards";

import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa6";

import homepagebanner from "../asset/homepagebanner.jpg";
import sonatasoftware from "../asset/sonata software.jpg";
import alt from "../asset/alt.jpg";
import tally from "../asset/tally.jpg";
import Tally from "../asset/Tally (1).jpg";
import image14 from "../asset/image 14.jpg";
import image16 from "../asset/image 16.jpg";
import image161 from "../asset/image 16 (1).jpg";
import mileslogo from "../asset/miles logo.png";
import inypay from "../asset/inpypay.jpg";
import Reactangle24 from "../asset/Rectangle 24.png";
import Reactangle25 from "../asset/Rectangle 25.png";
import Reactangle26 from "../asset/Rectangle 26.png";
import Reactangle27 from "../asset/Rectangle 27.png";
import Reactangle28 from "../asset/Rectangle 28.png";

const Hero = () => {
  const whysofromaticcarddata = [
    {
      heading: "Hire Right – First Time",
      para: "Our unique vetting process and extensive talent network ensures you’ll find talent with the right skillsets and culture fit you need—FAST.",
    },
    {
      heading: "Hiring Speed Guaranteed",
      para: "This is achieved through a streamlined hiring process that uses technology to match qualified candidates with open roles.",
    },
    {
      heading: "Vertical Focus Experience– Make Us A Partner Of Choice",
      para: "Our unique vetting process and extensive talent network ensures you’ll find talent with the right skillsets and culture fit you need—FAST.",
    },
  ];
  return (
    <div className="herocontainer">
      <Navbar />
      <img src={homepagebanner} alt="homepagebanner" />
      <div className="heropagefirstheading">
        We are proud to announce our partnership
      </div>
      <div className="heropagesecondconainer">
        <img
          className="heropageimagecontainerimage"
          src={sonatasoftware}
          alt="sonatasoftware"
        />
        <img
          className="heropageimagecontainerimage"
          src={alt}
          alt="sonatasoftware"
        />
        <img
          className="heropageimagecontainerimage"
          src={tally}
          alt="sonatasoftware"
        />
        <img
          className="heropageimagecontainerimage"
          src={Tally}
          alt="sonatasoftware"
        />
        <img
          className="heropageimagecontainerimage"
          src={image14}
          alt="sonatasoftware"
        />
        <img
          className="heropageimagecontainerimage"
          src={image16}
          alt="sonatasoftware"
        />
        <img
          className="heropageimagecontainerimage"
          src={image161}
          alt="sonatasoftware"
        />
        <img
          className="heropageimagecontainerimage"
          src={mileslogo}
          alt="sonatasoftware"
        />
        <img
          className="heropageimagecontainerimage"
          src={inypay}
          alt="sonatasoftware"
        />
      </div>
      <div className="whywearecontainer">
        <div className="herocontainersecondheading">Why We Are?</div>
        <div className="whywearecontainerpararow">
          <p className="whywearecontainerpara">
            <span className="whywearecontainerparaboldletter">
              Softomatic Technology Services
            </span>{" "}
            is an dynamic and forward-thinking recruitment agency that brings
            together a team of highly skilled professionals. Our staff consists
            of experienced recruiters, industry specialists, and HR experts,
            each with an extensive network and a deep understanding of various
            sectors. We believe that our team's collective knowledge and
            expertise enable us to offer tailored solutions that meet the unique
            needs of each client.
          </p>
          <img
            className="heropagereadergif"
            src="https://s3-alpha-sig.figma.com/img/6ec7/e5ba/d2839719ee11d620aa88ce193db19964?Expires=1695600000&Signature=AXvWbkBFcsG5iTT-s7-BU3pVPLjYoZbDFRfvMUk1VnygavRggZsnggw0q4N65Oi3dYmwj5KSTBpqNMbCSLIVbIAh-14ncv-xOh8bslwB-PWldSO8wNMerqApVcSnVJlNuZ7moU56pmvEfCJmEcQSW-Cac6raZKlwMzUEc1WIqdCw9BQey0M1DdNHEEYnEElXst71qh4ogxTyiILd9-aPw9iKj96c2hRLpqdJ6IlL8sfFwiiVlsp3clLG3Su9vH21qhr2fbzrKcOuc5QVbpAmRDmTXeueoFD~jGD17dwGeJjmzUHT3qnCLLS-26RVoBnJD6hTcE9mLrYF0ax4qxquWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="reader gif"
          />
        </div>
        <div className="gettoknowusbtncontainer">
          <button type="button" className="gettoknowusbtn">
            <div className="gettoknowusbtntxt">Get to Know Us</div>
          </button>
        </div>
      </div>
      <div className="wearealsoincontainer">
        <div className="wearealsoincontainerheading">We are also in</div>
        <div className="wearealsoinsubheading">
          Driving excellence and efficiency
        </div>
        <div className="rectangleimagesrow">
          <img
            className="reactangleimage"
            src={Reactangle24}
            alt="Reactangle24"
          />
          <img
            className="reactangleimage"
            src={Reactangle25}
            alt="Reactangle25"
          />
          <img
            className="reactangleimage"
            src={Reactangle26}
            alt="Reactangle26"
          />
          <img
            className="reactangleimage"
            src={Reactangle27}
            alt="Reactangle27"
          />
          <img
            className="reactangleimage"
            src={Reactangle28}
            alt="Reactangle28"
          />
        </div>
      </div>
      <div className="whysoftomaticcontainer">
        <div className="whysoftomaticheading">Why SOFTOMATIC need for you?</div>
        <div className="whysoftomaticsubheading">Our Focus</div>
        <div className="whysoftomaticrow">
          <div className="whysoftomaticleftcontainer">
            {whysofromaticcarddata.map((data, index) => {
              return (
                <div className="whysoftomaticcardbluecontainer" key={index}>
                  <div className="whysoftomaticcardwhitecontainer">
                    <div className="whysoftomaticcardheading">
                      {data.heading}
                    </div>
                    <div className="whysoftomaticcardpara">{data.para}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="whysoftomaticrightcontainer">
            <img
              src="https://s3-alpha-sig.figma.com/img/f71c/223a/baebb3570a940ae18c6ff3fe8ca78bd0?Expires=1695600000&Signature=O0rJ93cd~CrQET4KIOlJnJSgsOx-hZVTI9kU2ltpuMYg1Gd4FCU5vr8YfaerPICzMPSjMVWadsNKNUFIylb-vaDBP5AFxmCDTrhRKrXCHNDQ3AIB3GuWjmRZz4efdbc2ttvV6Ys7yCdHwNkj7nlDxV-tQVyc-pCPStAZ9BXnihwKfe7aCtEsSwtXVxeoZbS2h3njs31YO5yIZ8S5W1iSnsTe-xtqt9D6zHuPriElzphLy~4KELAeuX3GHGiekGx1g-thf7O~1e7AlrHM19epZChfiQC5QXERRxTsfDWjti-bk9faDQdc2sAWwPdir7aPfwYLnljuCQWxwmFWHJ2vDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="laptop gif"
            />
          </div>
        </div>
      </div>
      <div className="servicescontainer">
        <div className="wearealsoincontainerheading">Services</div>
        <div className="wearealsoinsubheading">
          Transforming businesses with strategic consulting expertise.
        </div>
        <ServiceCards />
        <div className="gettoknowusbtncontainer">
          <button type="button" className="gettoknowusbtn">
            <div className="gettoknowusbtntxt">View Services</div>
          </button>
        </div>
      </div>
      <div className="heropagefootercontainer">
        <div className="heropagefooterrow1">
          <div className="heropagefooterheading">
            SOFROMATIC TECHNOLOGY SERVICES
          </div>
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
        <div className="heropagefooterrow2">
          <div className="heropagefootercolumn">
            <div>501, Maple Homes, Gopal Nagar Society, KPHB,</div>
            <div>Hyderabad - 500085</div>
            <div>Telangana, India</div>
            <div>Mobile: +91-8499987080</div>
            <div>Email: enquiry@softmatic.co.in</div>
          </div>
          <div className="heropagefootercolumn">
            <div className="footerrow2heading">RESOURCES</div>
            <br />
            <div>Application</div>
            <div>Documentations</div>
            <div>Systems</div>
            <div>FAQ</div>
          </div>
          <div className="heropagefootercolumn">
            <div className="footerrow2heading">PRICING</div>
            <br />
            <div>Overview</div>
            <div>Premium Plans</div>
            <div>Affiliate Program</div>
            <div>Promotions</div>
          </div>
          <div className="heropagefootercolumn">
            <div className="footerrow2heading">COMPANY</div>
            <br />
            <div>About Us</div>
            <div>Blog</div>
            <div>RESOURCES</div>
            <div>Partnerships</div>
          </div>
          <div className="heropagefootercolumn">
            <div className="footerrow2heading">SOCIAL</div>
            <br />
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Instagram</div>
            <div>Linkedin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
