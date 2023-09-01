import handlePrice from "@/app/utilits/helpers/handlePrice";
import React from "react";

function ListingPrice({ listing ,className}: { listing: any ,className? : string}) {
  return (
    <>
      {listing.offer ? (
        <div className={`listing-price text-3xl max-sm:text-lg font-semibold my-1 text-[--sec-text-color] flex items-center ${className}`}>
          <del className="text-[--sec-color] opacity-70 mr-3">
            ${handlePrice(listing.regularPrice)}
          </del>{" "}
          <span className="flex items-center">
            ${handlePrice(listing.discountedPrice)}{" "}
            <span className=" text-3xl max-sm:text-lg ms-1">
              {listing.type === "rent" ? "/ Month" : ""}
            </span>
          </span>
        </div>
      ) : (
        <div className={`listing-price text-3xl max-sm:text-lg font-semibold my-1 text-[--sec-text-color] flex ${className}`}>
          <span className="flex items-center">
            ${handlePrice(listing.regularPrice)}{" "}
            <span className=" text-xl ms-1">
              {listing.type === "rent" ? "/ Month" : ""}
            </span>
          </span>
        </div>
      )}
    </>
  );
}

export default ListingPrice;
