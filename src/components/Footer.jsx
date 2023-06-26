import SocialLinks from "./SocialLinks";
import { StyledFooter } from "./styles/Footer.styled";
import { logoWhite, iconLocation, iconPhone, iconEmail } from "../assets";

export default function Footer() {
  return (
    <StyledFooter>
      <picture>
        <img src= {logoWhite} alt="logo" />
      </picture>  
      <div>
        <ul>
          <li>
            <picture>
              <img src= {iconLocation} alt=""/>  
            </picture>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </li>  
          <li>
            <picture>
              <img src= {iconPhone} alt=""/>
            </picture>  
            <span>
              +1-543-123-4567
            </span>  
          </li>
          <li>
            <picture>
              <img src= {iconEmail} alt=""/>
            </picture> 
            <span> 
              example@huddle.com
            </span>  
          </li>  
        </ul>
    
        <ul>
          <li>
            <a href= "#">
              About Us
            </a>  
          </li>
          <li>
            <a href= "#">
              What We Do
            </a>  
          </li>
          <li>
            <a href= "#">
              FAQ
            </a>  
          </li>
        </ul>
    
        <ul>
          <li>
            <a href= "#">
              Career
            </a>  
          </li>
          <li>
            <a href= "#">
              Blog
            </a>  
          </li>
          <li>
            <a href= "#">
              Contact Us
            </a>  
          </li>
        </ul>
    
        <SocialLinks />
      </div>
      <small>
        &copy; Copyright 2018 Huddle. All rights reserved.
      </small>
    </StyledFooter>
  );
}
