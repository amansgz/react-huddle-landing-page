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

  & picture {
    width: 40vw;
    max-width: 170px;
    margin-bottom: 1.8em;
  }

  & div {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  & ul {
    @media (min-width: 768px) {
      padding-top: 1em;
    }  
  }
  & div ul:nth-child(1) {
    padding: 1em;
    padding-left: 0;
  }
  & ul:nth-child(1) li {
    display: flex;
    gap: 1em;
  }
  & ul:nth-child(1) li picture {
    display: inline;
    width: 5vw;
    max-width: 20px;
  }
  & ul:nth-child(1) span {
    width: 350px;

    @media (min-width: 768px) {
      width: 25vw;
      max-width: 380px;
    }  
  } 
  & ul:nth-child(2) {
    @media (min-width: 768px) {
      padding-left: 1em;
    }  
  }
  & a:hover,
  & a:focus {
    text-decoration: underline;
  }

  & small {
    display: block;
    text-align: center;

    @media (min-width: 768px) {
      text-align: right;
    }
  }
`;
