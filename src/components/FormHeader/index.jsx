import { Cart, Search, Tick, Timer } from './../Icons';

const FormHeader = () => {
  return (
    <header
      style={{
        background: "linear-gradient(95.05deg, #FFE2E2 6.01%, #D5C7FF 100.09%)",
      }}
      className="p-3 rounded-t-lg flex flex-col gap-0.5 items-center w-full justify-center font-roboto relative overflow-hidden"
    >
      <h3 className="text-[18px] font-semibold">Welcome to SastoSales,</h3>
      <h4 className="text-[14px] text-[#484343]">सस्तो भन्दा सस्तो!</h4>

      <Cart className="absolute -bottom-2.5 left-1.5 -rotate-45  "/>
      <Timer className="absolute top-4 left-12 scale-110"/>
      <Tick className="absolute top-[12px] right-16"/>
      <Search className="absolute bottom-0 right-8"/>

    </header>
  );
};

export default FormHeader;
