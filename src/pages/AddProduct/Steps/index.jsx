import { cn } from "../../../utils/cn";

const Steps = ({ step, setStep }) => {
  return (
    <div className="flex flex-col h-full gap-2">
      {Array.from({ length: 3 }, (_, i) => {
        return (
          <div
            key={i}
            className={cn(
              `relative transition-all duration-200 border-r-8 border-[#DCDCDC] border-dotted w-[100px]   `,
              i !== 2 ? " flex-1" : "h-1",
              i < step && "border-[#816FB5]"
            )}
          >
            <div className="flex items-center gap-2 absolute top-1 right-2 -translate-y-1/2">
              <button
                type="button"
                className={cn(
                  "w-8 h-8 bg-[#DCDCDC] flex items-center justify-center rounded-full",
                  i < step && "bg-[#816FB5] text-white"
                )}
                onClick={() => setStep(i)}
              >
                {i + 1}
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: 3 }, (_, index) => {
                  return (
                    <div
                      key={`dot-${index}`}
                      className={cn(
                        ` transition-all duration-100 bg-[#DCDCDC] rounded-full `,
                        i < step && "bg-[#816FB5]"
                      )}
                      style={{
                        width: `${12 - index * 3}px`,
                        height: `${12 - index * 3}px`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
