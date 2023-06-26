import styled from "styled-components";
import { COLORS, SIZES } from "./values";

export const Button = styled.button`
  margin: 1em 0;
  font-size: ${SIZES.fs4};
  font-weight: 700;
  text-transform: capitalize;
  border: none;
  border-radius: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: opacity .1s ease;

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`

export const PinkButton = styled(Button)`
  background-color: ${COLORS.primary};
  color: #FFF;
`

export const WhiteButton = styled(Button)`
  background-color: #FFF;
  color: ${COLORS.neutral2};
`