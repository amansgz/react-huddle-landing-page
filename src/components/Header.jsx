import { StyledHeader, Logo } from "./styles/Header.styled";
import { WhiteButton } from "./styles/Button.styled";
import { logo } from "../assets";

export default function Header() {
  return (
    <StyledHeader>
      <Logo>
      <img src={logo} alt="Logo" />
      </Logo>
      <WhiteButton>
        Try it Free
      </WhiteButton>
    </StyledHeader>
  );
}
