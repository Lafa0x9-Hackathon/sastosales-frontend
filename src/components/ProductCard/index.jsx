import Button from "./../Button";
import { Cart, Location, Timer } from "./../Icons";
import { Star } from "./../Icons";

const ProductCard = ({
  title, date, label, address ,rating, price, image
}) => {
  return (
    <div className="rounded-[16px] overflow-hidden font-roboto">
      <div className="w-full h-[180px]">
        <img
          src={image}
          alt="bike"
          className="h-full w-full object-top"
        />
      </div>
      <div className="flex flex-col gap-1 py-3 px-4 bg-[#E7E4E4]">
        <p className="text-[14px] font-semibold text-[##383838] leading-normal">
         {title}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-[#9A9A9A] flex gap-1 items-center">
            <Timer className="text-inherit" />
            <span>{date} </span>
          </div>

          <div className="text-[10px] uppercase py-1 px-1.5 text-[#342F98] font-medium bg-[#EBEBFF]">
            {label}
          </div>
        </div>

        <div className="flex gap-2 text-[12px] text-[#9A9A9A]">
          <span>EV</span>
          <div className="flex items-center gap-0.5">
            <Location className="h-[9px] w-[9px] text-[#666]" />
            <span>{address}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[14px] mt-2">
            <Star className="w-5 h-5" />
            <span className="text-[#4E5566]">{rating}</span>
            <span className="text-[#9A9A9A]">Seller</span>
          </div>
          <span className="text-[16px] font-normal text-[#292B2C]">
            Rs. {price}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-center relative">
          <Button
            type="button"
            className="py-1 px-2 font-normal rounded-lg text-[14px]"
          >
            Buy Now
          </Button>
          <button type="button">
            <Cart className="w-[18px] h-[18px] absolute right-2 top-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
