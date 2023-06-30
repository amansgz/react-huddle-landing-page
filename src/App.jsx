import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import MiniCard from './components/MiniCard/MiniCard';
import Footer from "./components/Footer/Footer";
import { Wrapper } from "./components/Layout/Wrapper.styled";
import { Container } from "./components/Layout/Container.styled";

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
