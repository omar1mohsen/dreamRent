import React, { useMemo, useState } from "react";
import ListingCard from "../../../components/ListingCard";
import Pagination from "./Pagination";
import SortComponent from "./SortComponent";
import { motion } from "framer-motion";

function MainSec({
  listings,
  categoryName,
  page,
  fetchListingsDefault,
  orderListingsByLowestPrice,
  orderListingsByHighestPrice,
  orderListingsByoffers,
  sortvalue,
}: {
  listings: any;
  categoryName?: string;
  page?: string;
  fetchListingsDefault: any;
  orderListingsByLowestPrice: any;
  orderListingsByHighestPrice: any;
  orderListingsByoffers?: any;
  sortvalue: string;
}) {
  const [currentItems, setCurrentItems] = useState([]);
  return (
    <main className="py-8 px-1 sm:px-2">
      <motion.h3
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl max-md:text-2xl max-sm:text-sm font font-bold capitalize tracking-wider text-[--sec-text-color]"
      >
        Real Estate & Homes{" "}
        {page === "offers" ? "with special offers" : "For " + categoryName}
      </motion.h3>
      {listings?.length > 0 ? (
        <motion.main
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-2 max-sm:pb-12"
        >
          <div className="header flex justify-between items-center  sm:px-5">
            <p className="text-lg max-sm:text-xs font-semibold my-5">
              {listings?.length} results
            </p>

            <SortComponent
              orderListingsByLowestPrice={orderListingsByLowestPrice}
              orderListingsByHighestPrice={orderListingsByHighestPrice}
              fetchListingsDefault={fetchListingsDefault}
              orderListingsByoffers={orderListingsByoffers}
              value={sortvalue}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="listings-contaniner flex flex-row flex-wrap justify-start max-sm:justify-center items-center"
          >
            {currentItems.map((listing: any) => {
              return (
                <div
                  key={listing.id}
                  className="w-full sm:w-1/2 lg:w-1/3 p-2 relative "
                >
                  <ListingCard
                    key={listing.id}
                    id={listing.id}
                    listing={listing.data}
                  />
                </div>
              );
            })}
          </motion.div>
          <Pagination listings={listings} setCurrentItems={setCurrentItems} />
        </motion.main>
      ) : (
        <p className="text-xl font-semibold my-4 capitalize tracking-wider text-[--sec-color]">
          {page === "offers"
            ? "there are no current offers"
            : `No listings for ${categoryName}`}
        </p>
      )}
    </main>
  );
}

export default MainSec;
