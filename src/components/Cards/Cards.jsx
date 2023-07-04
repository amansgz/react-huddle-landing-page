import { StyledCard } from "./Card.styled";
import { features } from "../../constants/index";


const FeatureCard = ({ title, content, image, alt, index, id }) => (
  <StyledCard layout={id % 2 === 0 && "row"}>
    <picture>
      <img src={image} alt={alt} />
    </picture>
    <div>
      <h2>
        {title}
      </h2>
      <p>
        {content}
      </p>
    </div>
  </StyledCard>
);

const Cards = () =>  (
  <div>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
  </div>
);

export default Cards;