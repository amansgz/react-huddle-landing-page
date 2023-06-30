import { StyledHeader, Logo } from "./Header.styled";
import { WhiteButton } from "../Button/Button.styled";
import { logo } from "../../assets";

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
