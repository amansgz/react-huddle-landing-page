import styled from "styled-components";
import { COLORS } from "./values";

export const StyledFooter = styled.footer`
  padding: 2em;
  padding-top: 10em;
  padding-bottom: 3em;
  background-color: ${COLORS.neutral2};
  color: #FFF;
  
  @media (min-width: 1024px) {
    padding: 6em;
    padding-top: 10em;
    padding-bottom: 3em;
  }

  ul {
    @media (min-width: 768px) {
      padding-top: 1em;
    }  
  }
`
export const Container = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`
export const Logo = styled.picture`
  width: 40vw;
  max-width: 170px;
  margin-bottom: 1.8em;
`
export const ListInfo = styled.ul`
  padding: 1em;
  padding-left: 0;

  li {
    display: flex;
    gap: 1em;
  }
  span {
    width: 350px;

  @media (min-width: 768px) {
    width: 25vw;
    max-width: 380px;
  }  
`

export const Icon = styled.picture`
  display: inline;
  width: 5vw;
  max-width: 20px;
`
export const NavLinks = styled.ul`
  @media (min-width: 768px) {
    padding-left: 1em;
  }  
  
  a:hover,
  a:focus {
    text-decoration: underline;
  }
`
export const Copyright = styled.small`
  display: block;
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }
`