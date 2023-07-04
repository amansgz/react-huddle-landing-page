import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import MiniCard from './components/MiniCard/MiniCard';
import Footer from "./components/Footer/Footer";
import { Container } from "./components/Shared/Container.styled";


export default function App() {
  return (
    <>
      <Header /> 
      <main>
        <Hero />
        <Container>
          <Cards />
          <MiniCard />
        </Container>  
      </main>
      <Footer />
    </>
  );
}
