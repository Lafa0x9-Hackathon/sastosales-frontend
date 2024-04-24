import { Link } from "react-router-dom";

import { Input, PhoneNumberInput, PasswordInput } from "../../Components/Input";
import Label from "../../Components/Label";
import Button from "../../Components/Button";
import FormHeader from "../../Components/FormHeader";

const SignUpForm = () => {
  return (
    <form className="font-roboto flex flex-col gap-6 items-center">
      <FormHeader />
      <div className="px-4 w-[95%] flex flex-col gap-4">
        <div className="flex flex-col gap-2 ">
          <Label htmlFor="name">Full Name</Label>
          <Input type="text" id="name" placeholder="Eg: Sita Prasad" />
        </div>

        <div className="flex flex-col gap-2 ">
          <Label htmlFor="phone-number">Phone Number</Label>
          <PhoneNumberInput
            placeholder="Phone number"
            type="text"
            id="phone-number"
            onChange={() => {}}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <Label htmlFor="password">Password</Label>
          <PasswordInput id="password" />
        </div>
        <div className="flex flex-col gap-2 ">
          <Label htmlFor="password">Re-password</Label>
          <PasswordInput id="re-password" />
        </div>

        <div className="flex items-center gap-1">
          <Input
            type="checkbox"
            className="cursor-pointer"
            id="terms-and-conditions"
          />
          <Label htmlFor="terms-and-conditions">
            I hereby accept all{" "}
            <span className="font-medium text-[#816fb5]">
              Terms & Conditions
            </span>{" "}
            of Sastosale
          </Label>
        </div>

        <hr className="h-[1px] bg-black mt-4" />

        <Button type="submit" className="py-2.5 md:text-[14px]  ">
          Sign up
        </Button>

        <div className="flex items-center justify-center gap-1 text-[14px] text-gray-600 mt-2">
          <small className="text-[14px]">Already have an account ?</small>
          <Link to="/login" className="text-[#816fb5]">
            Login in
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
