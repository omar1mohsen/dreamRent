// import * as React from 'react';
// import { Select, Option } from "@material-tailwind/react";
import * as React from "react";
import { BsChevronDown } from "react-icons/bs";

function SortComponent({
  fetchListingsDefault,
  orderListingsByLowestPrice,
  orderListingsByHighestPrice,
  orderListingsByoffers,
  value,
}: {
  fetchListingsDefault: any;
  orderListingsByLowestPrice: any;
  orderListingsByHighestPrice: any;
  orderListingsByoffers?: any;
  value: string;
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative ">
      <button
        onClick={handleOpen}
        className="text-[--sec-text-color] max-sm:text-xs  tracking-wide flex items-center justify-start font-semibold"
      >
        sort: {value}{" "}
        <span>
          <BsChevronDown className="ms-2 font-extrabold" />
        </span>
      </button>
      <div
        className={`absolute  top-10 left-0 z-50 w-52 rounded-md shadow-sm shadow-black bg-[--main-text-color] ${
          open ? "flex" : "hidden"
        } flex-col items-center`}
      >
        <button
          onClick={fetchListingsDefault}
          className="w-full text-start ps-3  py-3 max-sm:text-xs  hover:bg-blue-200 transition-all "
        >
          Homes for You
        </button>
        <button
          className="w-full text-start ps-3  py-3 max-sm:text-xs   hover:bg-blue-200 transition-all"
          onClick={orderListingsByLowestPrice}
        >
          Price (Low to High)
        </button>
        <button
          className="w-full text-start ps-3 py-3 max-sm:text-xs   hover:bg-blue-200 transition-all"
          onClick={orderListingsByHighestPrice}
        >
          Price (High to Low)
        </button>
        {orderListingsByoffers && (
          <button
            className="w-full text-start ps-3 py-3 max-sm:text-xs   hover:bg-blue-200 transition-all"
            onClick={orderListingsByoffers}
          >
            Offers only
          </button>
        )}
      </div>
    </div>
  );
}

export default SortComponent;
