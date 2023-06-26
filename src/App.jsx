import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import MiniCard from './components/MiniCard';
import Footer from "./components/Footer";
import content from "./constants/content";
import { Wrapper } from "./components/styles/Wrapper.styled";
import { Container } from "./components/styles/Container.styled";

export default function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Hero />
      </Wrapper>
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
        <MiniCard />
      </Container>
      <Footer />
    </>
  );
}
