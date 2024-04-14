import Count from "./Count";
import Place from "./Place";
import Products from "./Products";

const Home = () => {
  return (
    <main className="h-full">
      <Place />
      <Products />
      <Count />
    </main>
  );
};

export default Home;
