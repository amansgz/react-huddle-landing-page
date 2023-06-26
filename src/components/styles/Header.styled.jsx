import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: transparent;

  @media (min-width: 768px) {
    justify-content: space-around;
    gap: 50vw;
  }    
  & picture {
    width: 30vw;
    max-width: 170px;
  }
  & button {
    width: 30vw;
    max-width: 200px;
    padding: 1em;
  }
`;