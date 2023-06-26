import { StyledCard } from "./styles/Card.styled";

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && "row"}>
      <picture>
        <img src={`../assets/${image}`} alt="" />
      </picture>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      
    </StyledCard>
  );
}
