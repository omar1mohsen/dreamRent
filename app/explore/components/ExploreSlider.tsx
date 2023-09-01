"use client";

import { db } from "@/firebase";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { Listings } from "@/app/offers/page";
import {
  Pagination,
  A11y,
  Scrollbar,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import ListingCard from "@/app/components/ListingCard";

function ExploreSlider({ type }: { type: string }) {
  const [listings, setListings] = useState<Listings | any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        // get ref
        const listingsRef = collection(db, "listings");

        // create a query
        const q = query(
          listingsRef,
          where("type", "==", type),
          orderBy("timestamp", "asc"),
          limit(10)
        );
        // execute query
        const querySnap = await getDocs(q);

        const listings: any[] = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
      } catch (error) {
        console.log("Error fetching listings", error);
      }
      setLoading(false);
    };
    fetchListings();
  }, [type]);
  return (
    <>
      {loading ? (
        <main className="min-h-screen w-full flex justify-center items-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </main>
      ) : (
        <main className="w-full my-6 h-full ">
          <h3 className="text-2xl font-semibold text-[--sec-text-color] capitalize">
            Homes For {type}
          </h3>
          <p className="text-lg font-semibold text-[--sec-color] my-1">
            Based on your view history
          </p>
          <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              560: {
                slidesPerView: 2,
              },
              865: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={20}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            scrollbar={{
              draggable: true,
            }}
            className="!py-8 px-2"
            key={uuidv4()}
          >
            {listings?.map((listing: Listings) => {
              return (
                <>
                  <SwiperSlide key={uuidv4()} className="relative">
                    <ListingCard
                      listing={listing.data}
                      key={listing.id}
                      id={listing.id}
                      page="explore"
                    />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </main>
      )}
    </>
  );
}

export default ExploreSlider;
