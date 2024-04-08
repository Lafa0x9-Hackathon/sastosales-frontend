import { v4 as uuidv4 } from "uuid";
import Wrapper from "../../components/ContainerWrapper";
import ProductCard from "../../components/ProductCard";
import Ads from "./Ads";
import { DUMMPY_PRODUCTS } from "../../utils/constants";
import {
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeperator,
} from "./../../components/Breadcrumb";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Wrapper>
      <main className="h-full py-10">
        <BreadcrumbList>
          <BreadcrumbItem className="font-semibold">
            {" "}
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeperator>{`>`}</BreadcrumbSeperator>
          <BreadcrumbItem className="underline">
            <Link to="/products">Products</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
        <section
          className="h-full py-4 rounded-xl"
          style={{
            background:
              "linear-gradient(95.05deg, #FFE2E2 6.01%, #D5C7FF 100.09%)",
          }}
        >
          <div className="grid grid-cols-[repeat(auto-fill,minmax(253px,1fr))] py-4 px-8 gap-5 ">
            {DUMMPY_PRODUCTS.map((product) => {
              return (
                <ProductCard
                  key={uuidv4()}
                  title={product.title}
                  date={product.date}
                  label={product.label}
                  address={product.address}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              );
            })}
            <Ads />
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

export default Products;
