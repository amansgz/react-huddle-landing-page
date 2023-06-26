import { StyledHeader } from "./styles/Header.styled";
import { WhiteButton } from "./styles/Button.styled";
import { logo } from "../assets";

export default function Header() {
  return (
    <StyledHeader>
      <picture>
      <img src={logo} alt= "Logo" />
      </picture>
      <WhiteButton bg="#FFF">
        Try it Free
      </WhiteButton>
    </StyledHeader>
  );
}
