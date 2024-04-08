import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductCard from "../../components/ProductCard";
import { DUMMPY_PRODUCTS } from "../../utils/constants";
import Wrapper from "./../../components/ContainerWrapper";
import Pagination from "../../components/Pagination";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <section className="py-10 px-2 font-roboto">
      <Wrapper className="rounded-[16px] overflow-hidden border-[1.5px] border-[#C8BBBB]">
        <div className="py-4 px-6 bg-[#E7DEFF] flex items-center justify-between">
          <div className="font-medium text-[14px]">
            {" "}
            <span className="text-gray-800">Latest</span>
            <span className="font-bold"> Ads</span>
          </div>
          <button
            type="button"
            className="underline uppercase text-[14px] font-roboto"
          >
            view more
          </button>
        </div>

        <div
          style={{
            background:
              "linear-gradient(95.05deg, #FFE2E2 6.01%, #D5C7FF 100.09%)",
          }}
        >
          <div className="grid grid-cols-[repeat(auto-fill,minmax(253px,1fr))] py-4 px-8  gap-5 ">
            {DUMMPY_PRODUCTS.slice(0, 8).map((product) => {
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
          </div>
          <div className="py-5 px-2 flex items-center justify-center">
            <Pagination
              onPageChange={(val) => setCurrentPage(val.selected)}
              pageRangeDisplayed={5}
              pageCount={5}
              renderOnZeroPageCount={null}
              currentPage={currentPage}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Products;
