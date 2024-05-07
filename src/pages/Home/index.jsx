import Count from "./Count";
import Place from "./Place";
import Products from "./Products";
import NavBar from "../../Components/navBar/navbar";
import Footer from "../../Components/footer/Footer";
import Hero from "../../Components/Hero/hero";
const Home = () => {
  return (
    <main className="h-full">
      <NavBar />
      <Hero />
      <Place />
      <Products />
      <Count />
      <Footer />
    </main>
  );
};

export default Home;
