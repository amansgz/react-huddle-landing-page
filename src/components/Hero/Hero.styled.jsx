import styled from "styled-components";
import { COLORS, SIZES } from "../../constants/values";

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  background-color: ${COLORS.neutral1};
  background-image: url(../assets/bg-hero-mobile.svg);
  background-repeat: no repeat;
  background-size: cover;
  padding-top: 8em;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 2em;
    padding: 10em 4em 4em;
    text-align: left;
    background-image: url(../assets/bg-hero-desktop.svg);
    background-position: top center;
  }
  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: ${SIZES.fs1};
    color: ${COLORS.neutral2};
    margin: .6em 0;  
  }
  p {
    width: 82vw;
    max-width: 540px;
    color: ${COLORS.neutral2};
  }
  picture {
    max-width: 680px;
  }
`