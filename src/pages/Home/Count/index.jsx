
import Button from "../../../Components/Button";
import Wrapper from "../../../Components/ContainerWrapper";
import { Map, Users, Map2 } from "../../../Components/Icons";

const Item = ({ label, icon: Icon, value }) => {
  return (
    <li className="flex items-start gap-3 mb-4">
      <Icon className="md:w-9 md:h-9 w-8 h-8 fill-[#333]" />
      <div className="flex flex-col text-[#999]">
        <span className="md:text-2xl text-xl font-extrabold">{value}</span>
        <small>{label}</small>
      </div>
    </li>
  );
};

const Count = () => {
  return (
    <section className="py-10 px-2">
      <Wrapper className="bg-[#E7DEFF] md:px-8 md:py-12 px-6 py-8 rounded-[16px] flex flex-col md:gap-12 gap-8 justify-center items-center">
        <ul className="font-roboto flex items-center w-full md:justify-evenly justify-between gap-4 flex-wrap">
          <Item label="Free ads" value={9} icon={Map} />
          <Item label="Trusted Sellers" value={3} icon={Users} />
          <Item label="Locations" value={"50+"} icon={Map2} />
        </ul>

        <div className="flex sm:flex-row flex-col  items-center gap-2">
          <Button type="button">Buy Products</Button>
          <Button type="button" className="bg-transparent text-[#816FB5]">
            Sell Products
          </Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Count;
