import Place from "./containers/Place";
import Count from "./containers/Count";
import Products from "./containers/Products";

const App = () => {
  return (
    <main className="h-full">
      <Place />
      <Products />
      <Count />
    </main>
  );
};

export default App;
