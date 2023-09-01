import React from "react";
import handleTitle from "@/app/utilits/helpers/handleTitle";
import { BiSolidBath, BiSolidBed } from "react-icons/bi";
import handlePrice from "@/app/utilits/helpers/handlePrice";

function CardDesc({ listing , page }: { listing: any; page? : any }) {
  //handle price
  
  return (
    <div className="listing-desc py-2 px-1">
      {listing.offer ? (
        <div className="listing-price text-lg font-semibold my-1 text-[--sec-text-color] flex items-center">
          <del className="text-[--sec-color] mr-1">
            ${handlePrice(listing.regularPrice)}
          </del>{" "}
          <span className="flex items-center">
            ${handlePrice(listing.discountedPrice)}{" "}
            <span className=" text-xl ms-1">
              {listing.type === "rent" ? "/ Month" : ""}
            </span>
          </span>
        </div>
      ) : (
        <div className="listing-price text-lg font-semibold my-1 text-[--sec-text-color]">
          <span className="flex items-center">
            ${handlePrice(listing.regularPrice)}{" "}
            <span className=" text-xl ms-1">
              {listing.type === "rent" ? "/ Month" : ""}
            </span>
          </span>
        </div>
      )}
      <h3 className=" text-xl font-semibold text-[--sec-text-color] tracking-wide ">
        {handleTitle(listing.title, 25)}
      </h3>
      <span className="-mt-0.5 mb-2 text-[--sec-color] block text-xs font-semibold">
        {listing.address}
      </span>
      {page === "explore" ? null :
      
      <div className="lisiting-rooms my-2 flex justify-between items-center pe-3">
        <div className="bed-rooms flex justify-center items-center">
          <BiSolidBed className="w-6 h-6 text-blue-300" />
          <span className="ms-1 px-2 border-2 rounded-xl border-blue-300 text-[--sec-text-color] font-bold">
            {listing.bedrooms}
          </span>
        </div>
        <div className="bed-rooms flex justify-center items-center">
          <BiSolidBath className="w-6 h-6 text-blue-300" />
          <span className="ms-1 px-2 border-2 rounded-xl border-blue-300 text-[--sec-text-color] font-bold">
            {listing.pathrooms}
          </span>
        </div>
      </div>
       }
    </div>
  );
}

export default CardDesc;
