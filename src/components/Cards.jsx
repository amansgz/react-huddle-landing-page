import { StyledCard, CardImage, CardTitle, CardText } from "./styles/Card.styled";
import { features } from "../constants";


const FeatureCard = ({ title, content, image, alt, index, id }) => (
  <StyledCard layout={id % 2 === 0 && "row"}>
    <CardImage>
      <img src={image} alt={alt} />
    </CardImage>
    <div>
      <CardTitle>
        {title}
      </CardTitle>
      <CardText>
        {content}
      </CardText>
    </div>
  </StyledCard>
);

const Cards = () =>  (
  <section>
    <div>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Cards;