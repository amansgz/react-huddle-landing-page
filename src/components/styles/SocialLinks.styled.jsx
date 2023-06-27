import styled from "styled-components";
import { COLORS } from "./values";

export const StyledSocialLinks = styled.div`
  @media (min-width: 1200px) {
    padding-right: 8em;
  }
`
export const ListLinks = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 2em;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`
export const Link = styled.a`
  margin: 0 .5em;
  font-size: 1.5em;
  color: white;

  &:hover,
  &:focus {
    color: ${COLORS.primary};
  }
`
