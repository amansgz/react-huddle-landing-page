import styled from "styled-components";
import { COLORS, SIZES } from "../../constants/values";

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
`
export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: ${SIZES.fs1};
  color: ${COLORS.neutral2};
  margin: .6em 0;
`

export const Text = styled.p`
  width: 290px;
  color: COLORS.neutral2;
  
  @media (min-width: 768px) {
    width: 42vw;
    max-width: 540px;
  }  
`

export const HeroImage = styled.picture`
  max-width: 680px;
`