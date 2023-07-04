import styled from "styled-components";
import { COLORS } from "../../constants/values";

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: transparent;
  z-index: 10;

  @media (min-width: 768px) {
    justify-content: space-around;
    gap: 50vw;
  }
`

export const Logo = styled.picture`
  width: 30vw;
  max-width: 170px;
`