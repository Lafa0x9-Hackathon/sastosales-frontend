import ProductFormHeader from "./ProductFormHeader";
import FormItem from "./FormItem";
import Label from "./../../../components/Label";
import { Input } from "../../../components/Input";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "../../../components/Select";
import { cities } from "./../../../utils/constants";

export const BasicProductDetailForm = () => {
  return (
    <div >
      <ProductFormHeader>Basic Product Details</ProductFormHeader>

      <div className="grid grid-cols-[360px_1fr_1fr] gap-8 py-7 px-6 text-[14px]">
        <FormItem>
          <Label>
            Title of Products<span className="text-red-500">*</span>
          </Label>
          <Input placeholder="bullet bike" />
        </FormItem>
        <FormItem>
          <Label>
            Price<span className="text-red-500">*</span>
          </Label>
          <Input type="number" placeholder="764000" />
        </FormItem>
        <FormItem>
          <Label>
            Categories<span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full capitalize">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="automobile" className="capitalize">
                automobile
              </SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
        <FormItem>
          <Label>
            Details<span className="text-red-500">*</span>
          </Label>
          <textarea
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit suscipit amet doloribus esse reiciendis. Recusandae voluptatum commodi assumenda quod deleniti nihil est distinctio in optio consequatur. Illo magnam velit eligendi."
            className="border-[0.8px] h-[240px] rounded-lg resize-none outline-none p-3 text-gray-600 leading-loose border-[#646464]"
          />
        </FormItem>
        <FormItem>
          <Label>
            Cities<span className="text-red-500">*</span>
          </Label>

          <Select>
            <SelectTrigger className="w-full capitalize">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => {
                return (
                  <SelectItem value={city} key={city} className="capitalize">
                    {city}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </FormItem>
        <FormItem>
          <Label>
            Wards<span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full capitalize">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      </div>
    </div>
  );
};
