import styled from "styled-components";
import { COLORS } from "./values";

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  text-align:center;
  background-color: ${COLORS.neutral1};
  background-color: transparent; 

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 2em;
    padding: 2em 4em;
    text-align: left;
  }

  & p {
    width: 290px;
    color: COLORS.neutral2;
    
    @media (min-width: 768px) {
      width: 42vw;
      max-width: 540px;
    }  
  }
  & button {
    margin: 2em 0;
    padding: 1em 4em;
  }
  & picture {
    max-width: 680px;
  }
`;