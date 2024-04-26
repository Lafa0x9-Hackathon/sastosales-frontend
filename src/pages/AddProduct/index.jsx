import { useState } from "react";
import Wrapper from "../../Components/ContainerWrapper";
import { BasicProductDetailForm } from "./ProductForm/BasicForm";
import Steps from "./Steps";
import Button from "../../Components/Button";

const AddProductPage = () => {
  const [step, setStep] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    if (step < 2) {
      setStep((prev) => prev + 1);
    }
  };

  const onPrevious = () => {
    if (step === 0) return;
    setStep((prev) => prev - 1);
  };

  return (
    <main className="py-20 h-full">
      <section>
        <Wrapper className="flex items-center gap-8 justify-center font-roboto h-[548px] ">
          <Steps step={step} setStep={setStep} />
          <form
            className="max-w-[960px]  w-full rounded-lg overflow-hidden bg-[#F1F1F1] h-full flex flex-col  justify-between"
            onSubmit={onSubmit}
          >
            {step === 0 ? (
              <BasicProductDetailForm />
            ) : step === 1 ? (
              <div>more detail form</div>
            ) : (
              <div>Review form</div>
            )}

            <div className="w-full px-6 py-4 flex items-center justify-between text-[14px]">
              {step !== 0 ? (
                <Button type="button" className="py-2.5" onClick={onPrevious}>
                  Previous
                </Button>
              ) : null}
              <Button type="submit" className=" ml-auto py-2.5">
                Next {step + 1}/3
              </Button>
            </div>
          </form>
        </Wrapper>
      </section>
    </main>
  );
};

export default AddProductPage;
