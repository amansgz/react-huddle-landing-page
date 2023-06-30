import SocialLinks from "../SocialLinks/SocialLinks";
import { StyledFooter, Logo, Container, ListInfo, Icon, NavLinks, Copyright } from "./Footer.styled";
import { logoWhite, iconLocation, iconPhone, iconEmail } from "../../assets";

export default function Footer() {
  return (
    <StyledFooter>
      <Logo>
        <img src= {logoWhite} alt="logo" />
      </Logo>  
      <Container>
        <ListInfo>
          <li>
            <Icon>
              <img src= {iconLocation} alt=""/>  
            </Icon>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </li>  
          <li>
            <Icon>
              <img src= {iconPhone} alt=""/>
            </Icon>
            <span>
              +1-543-123-4567
            </span>  
          </li>
          <li>
            <Icon>
              <img src= {iconEmail} alt=""/>
            </Icon> 
            <span> 
              example@huddle.com
            </span>  
          </li>  
        </ListInfo>
    
        <NavLinks>
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
        </NavLinks>
    
        <NavLinks>
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
        </NavLinks>
    
        <SocialLinks />
      </Container>
      <Copyright>
        &copy; Copyright 2018 Huddle. All rights reserved.
      </Copyright>
    </StyledFooter>
  );
}
