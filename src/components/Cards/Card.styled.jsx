import styled from "styled-components";
import { COLORS } from "../../constants/values";

export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em;
  margin-bottom: 2em;
  text-align: center;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.15);
  

  @media (min-width: 768px) {
    flex-direction: ${({ layout }) => layout || "row-reverse"};
    justify-content: space-between;
    gap: 1em;
    padding: 5em;
    text-align: left; 
  }
  
  picture {
    @media (min-width: 1024px) {
      padding-left: 4em;
    }
  }

  div {
    @media (min-width: 1024px) {
      padding-left: 4em;
    }    
  }

  h2{
    padding-top: 2em;    
  }

  p {
    width: 72vw;
    max-width: 550px;
    color: ${COLORS.neutral3};
    margin: 0;
  }
`
  