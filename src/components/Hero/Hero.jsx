import { StyledHero } from "./Hero.styled";
import { PinkButton } from "../Shared/Button.styled";
import { illustrationMockups } from "../../assets";

export default function Hero() {
  return (
    <StyledHero>
      <div>
        <h1>
          Build The Community <br /> 
          Your Fans Will Love
        </h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <PinkButton>
          Get Started For Free
        </PinkButton>
      </div>

      <picture>
        <img src= {illustrationMockups} alt="illustration mockup" />
      </picture>
    </StyledHero>
  );
}
