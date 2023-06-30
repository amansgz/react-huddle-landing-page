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
  
  div {
    @media (min-width: 1024px) {
      padding-left: 4em;
    }    
  }
`
export const CardImage = styled.picture`
  @media (min-width: 1024px) {
    padding-left: 4em;
  }
`
export const CardTitle = styled.h2`
  padding-top: 2em;    
`

export const CardText = styled.p`
  width: 270px;
  color: ${COLORS.neutral3};
  margin: 0;

  @media (min-width: 768px) {
    width: 40vw;
    max-width: 550px;
  }
`