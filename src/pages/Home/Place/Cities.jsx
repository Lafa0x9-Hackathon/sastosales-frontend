import Button from "../../../components/Button";
import { cities } from "../../../utils/constants";
import { Add } from "../../../components/Icons";

const Cities = () => {
  return (
    <div className="flex-1 flex flex-col md:gap-12 gap-[40px] items-center">
      <ul className="grid grid-cols-3 md:gap-2 gap-1 md:text-[15.75px] text-[14px] w-full">
        {cities.map((city) => (
          <li key={city}>
            <button
              type="button"
              className="text-inherit font-roboto capitalize text-start"
            >
              {city}
            </button>
          </li>
        ))}

        <li>
          <button type="button" className="text-inherit font-roboto">
            {`More cities >>`}
          </button>
        </li>
      </ul>

      <Button type="button">
        <Add className="w-5 h-5 fill-[#F8F8F8]" />
        <span>Add Listing</span>
      </Button>
    </div>
  );
};

export default Cities;
