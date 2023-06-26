import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import MiniCard from './components/MiniCard';
import Footer from "./components/Footer";
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
        <Cards />
        <MiniCard />
      </Container>
      <Footer />
    </>
  );
}
