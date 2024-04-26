import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from "../Icons";
import { cn } from "../../utils/cn";

const PaginationButton = ({ children, className }) => (
  <div
    className={cn(
      "md:w-12 w-8 md:h-12 h-8 rounded-full text-[#816FB5] transition-all duration-200  flex items-center justify-center bg-[#FFEEE8] flex-shrink-0 ",
      className
    )}
  >
    {children}
  </div>
);

const Pagination = ({
  onPageChange,
  pageRangeDisplayed,
  pageCount,
  renderOnZeroPageCount,
  currentPage,
}) => {
  return (
    <ReactPaginate
      className="flex items-center md:gap-2 gap-1 font-medium text-[#030B26] pagination"
      breakLabel="..."
      nextLabel={
        <PaginationButton
          className={`ml-6 ${
            currentPage === pageCount - 1
              ? "bg-transparent opacity-70 pointer-events-none"
              : ""
          }`}
        >
          <ArrowRight/>
        </PaginationButton>
      }
      onPageChange={onPageChange}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount}
      previousLabel={
        <PaginationButton
          className={`mr-6 ${
            currentPage === 0
              ? "bg-transparent opacity-70 pointer-events-none"
              : ""
          }`}
        >
          <ArrowLeft/>
        </PaginationButton>
      }
      renderOnZeroPageCount={renderOnZeroPageCount}
      activeClassName=" bg-[#816FB5] text-white"
    />
  );
};

export default Pagination;
