import { cities } from "./../../utils/constants";
import { Add } from "./../Icons";

const Cities = () => {
  return (
    <div className="flex-1 flex flex-col gap-12 items-center">
      <ul className="grid grid-cols-3 gap-2 text-[15.75px] w-full">
        {cities.map((city) => (
          <li key={city}>
            <button
              type="button"
              className="text-inherit font-roboto capitalize"
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

      <button
        type="button"
        className="flex items-center gap-2 font-roboto text-[#F8F8F8] py-3 px-7 bg-[#816FB5] rounded-[4px] text-[15px] font-medium"
      >
        <Add className="w-5 h-5 fill-[#F8F8F8]" />
        <span>Add Listing</span>
      </button>
    </div>
  );
};

export default Cities;
