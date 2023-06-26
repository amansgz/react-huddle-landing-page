import styled from "styled-components";

export const StyledMiniCard = styled.article`
  padding: 1.5em 1em;
  margin: auto;
  text-align: center;
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0 -4px 10px 2px rgba(0, 0, 0, 0.15);
  transform : translate(0, 134px);
     
  @media (min-width: 600px) {
    width: 70vw;
    max-width: 780px;
    padding: 3em;
  }  

  & button {
    padding: 1em 2em;

    @media (min-width:768px) {
      padding: 1em 5em;
    }  
  }
`;
