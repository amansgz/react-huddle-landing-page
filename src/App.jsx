import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import MiniCard from './components/MiniCard/MiniCard';
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Cards />
        <MiniCard />
      </main>
      <Footer />
    </>
  );
}
