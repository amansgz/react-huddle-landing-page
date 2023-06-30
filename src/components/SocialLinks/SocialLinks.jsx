import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { StyledSocialLinks, ListLinks, Link } from "./SocialLinks.styled";

export default function SocialLinks() {
  return (
    <StyledSocialLinks>
      <ListLinks>
        <li>
          <Link href="https://facebook.com" aria-label="Go to Facebook">
            <FaFacebook />
          </Link>
        </li>
         <li>
          <Link href="https://twitter.com" aria-label="Go to Twitter">
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com" aria-label="Go to Instagram">
            <FaInstagram />
          </Link>
        </li>
      </ListLinks>
    </StyledSocialLinks>
  );
}
