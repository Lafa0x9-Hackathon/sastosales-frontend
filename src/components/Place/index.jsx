import Container from "../Container";
import { Location } from "../Icons/Location";
import Cities from "./Cities";

const Place = () => {
  return (
    <section className="py-10 px-2">
      <Container className="rounded-[16px] overflow-hidden border-[1.5px] border-[#C8BBBB]">
        <div className="flex items-center gap-1 bg-[#E7DEFF] text-[#292B2C] px-3 py-2">
          <Location className="w-5 h-5 text-inherit" />
          <h2 className="font-semibold text-xl font-roboto text-inherit">
            Choose a city or region
          </h2>
        </div>

        <div
          className="md:px-8 md:py-7 px-6 py-5 flex md:gap-4 gap-2 md:flex-row flex-col-reverse"
          style={{
            background:
              "linear-gradient(95.05deg, #FFE2E2 6.01%, #D5C7FF 100.09%)",
          }}
        >
          <Cities />
          <div className="flex items-center justify-center md:w-[340px] w-full  mr-8">
            <img src="/images/nepal.png" alt="nepal" className="md:h-[270px] h-[240px] w-auto"/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Place;
