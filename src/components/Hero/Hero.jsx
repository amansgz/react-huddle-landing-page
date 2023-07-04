import { StyledHero, Title, Text, HeroImage } from "./Hero.styled";
import { PinkButton } from "../Shared/Button.styled";
import { illustrationMockups } from "../../assets";

export default function Hero() {
  return (
    <StyledHero>
      <div>
        <Title>
          Build The Community <br /> 
          Your Fans Will Love
        </Title>
        <Text>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </Text>
        <PinkButton>
          Get Started For Free
        </PinkButton>
      </div>

      <HeroImage>
        <img src= {illustrationMockups} alt="illustration mockup" />
      </HeroImage>
    </StyledHero>
  );
}
