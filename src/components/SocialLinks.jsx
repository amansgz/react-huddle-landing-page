import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { StyledSocialLinks } from "./styles/SocialLinks.styled";

export default function SocialLinks() {
  return (
    <StyledSocialLinks>
      <ul>
        <li>
          <a href="https://facebook.com" aria-label="Go to Facebook">
            <FaFacebook />
          </a>
        </li>
         <li>
          <a href="https://twitter.com" aria-label="Go to Twitter">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://instagram.com" aria-label="Go to Instagram">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </StyledSocialLinks>
  );
}
