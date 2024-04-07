import Container from "../Container";
import { Location } from "../Icons/Location";
import Cities from "./Cities";

const Place = () => {
  return (
    <section className="py-10">
      <Container className="rounded-[16px] overflow-hidden border-[1.5px] border-[#C8BBBB]">
        <div className="flex items-center gap-1 bg-[#E7DEFF] text-[#292B2C] px-3 py-2">
          <Location className="w-5 h-5 text-inherit" />
          <h2 className="font-semibold text-xl font-roboto text-inherit">
            Choose a city or region
          </h2>
        </div>

        <div
          className="px-8 py-7 flex gap-4"
          style={{
            background:
              "linear-gradient(95.05deg, #FFE2E2 6.01%, #D5C7FF 100.09%)",
          }}
        >
          <Cities />
          <div className="flex items-center justify-center w-[340px] mr-8">
            <img src="/images/nepal.png" alt="nepal" className="h-[270px] w-auto"/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Place;
