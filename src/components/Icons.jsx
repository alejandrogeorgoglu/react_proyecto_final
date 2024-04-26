import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import "./Icons.css";
// import { ExternalLink } from "react-external-link";
// import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  // InstagramShareButton,
  // InstagramIcon,
} from "react-share";

const Icons = () => {
  return (
    <div className="icons">
      <div className="Icons1">
        {/* <div>
          <button
            as={Link}
            to="https:www.google.com"
            FontAwesomeIcon
            icon={faFacebook}
            className="Icons2"
          ></button>
        </div> */}
        {/* <div>
          <FacebookShareButton
            url={"https://www.example.com"}
            quote={"Dummy text!"}
            hashtag="#muo"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div>
          <TwitterShareButton
            url={"https://www.example.com"}
            quote={"Dummy text!"}
            hashtag="#muo"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div> */}
        {/* <div>
          <InstagramShareButton
            url={"https://www.example.com"}
            quote={"Dummy text!"}
            hashtag="#muo"
          >
            <InstagramIcon size={32} round />
          </InstagramShareButton>
        </div> */}

        <FontAwesomeIcon icon={faInstagram} className="Icons2" />
        <FontAwesomeIcon icon={faXTwitter} className="Icons2" />
        <FontAwesomeIcon icon={faEnvelope} className="Icons2" />
      </div>
      <div className="Copyright">
        <FontAwesomeIcon icon={faCopyright} className="IconCopyright" />
        <p className="IconCopyright">2024 - Copyright - Alejandro Georgoglu </p>
      </div>
    </div>
  );
};

export default Icons;
