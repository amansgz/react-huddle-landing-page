import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { StyledSocialLinks } from "./styles/SocialLinks.styled";

export default function SocialLinks() {
  return (
    <StyledSocialLinks>
      <ul>
        <li>
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </li>
         <li>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </StyledSocialLinks>
  );
}
