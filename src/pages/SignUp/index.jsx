import Wrapper from "../../components/ContainerWrapper";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <Wrapper>
      <main className="py-10 px-2 flex items-center justify-center gap-24">
        <div className="w-[380px]">
          <SignUpForm />
        </div>
        <div className="flex-1 md:block hidden">
          <img src="/images/map_with_logo.png" className="w-full object-contain" alt="map" />
        </div>
      </main>
    </Wrapper>
  );
};

export default SignUpPage;
