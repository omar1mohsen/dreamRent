"use client";
import HeaderNav from "@/app/components/HeaderNav";
import MainNav from "@/app/components/MainNav";
import { db } from "@/firebase";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
  where,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import MainSec from "./components/MainSec";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export interface Listings {
  id: string;
  data: string[];
}

function Page({ params }: { params: { slug: string } }) {
  const [listings, setListings] = useState<Listings | any>();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = React.useState("Homes for You");

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        // get ref
        const listingsRef = collection(db, "listings");

        // create a query
        const q = query(
          listingsRef,
          where("type", "==", params.slug),
          orderBy("timestamp", "desc")
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
        setValue("Homes for You");
        setLoading(false);
      } catch (error) {
        console.log("Error fetching listings", error);
      }
    };
    fetchListings();
  }, [params.slug]);

  const fetchListingsDefault = async () => {
    setLoading(true);
    try {
      // get ref
      const listingsRef = collection(db, "listings");

      // create a query
      const q = query(
        listingsRef,
        where("type", "==", params.slug),
        orderBy("timestamp", "desc")
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
      setValue("Homes for You");
      setLoading(false);
    } catch (error) {
      console.log("Error fetching listings", error);
    }
  };

  const orderListingsByHighestPrice = async () => {
    setLoading(true);
    try {
      // get ref
      const listingsRef = collection(db, "listings");

      // create a query
      const q = query(
        listingsRef,
        where("type", "==", params.slug),
        orderBy("regularPrice", "desc")
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
      setValue("Price (High to Low)");
      setLoading(false);
    } catch (error) {
      console.log("Error fetching listings", error);
    }
  };

  const orderListingsByLowestPrice = async () => {
    setLoading(true);
    try {
      // get ref
      const listingsRef = collection(db, "listings");

      // create a query
      const q = query(
        listingsRef,
        where("type", "==", params.slug),
        orderBy("regularPrice", "asc")
      );
      // execute query
      const querySnap = await getDocs(q);
      console.log(querySnap);

      const listings: any[] = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setValue("Price (Low to High)");
      setLoading(false);
    } catch (error) {
      console.log("Error fetching listings", error);
    }
  };

  const orderListingsByoffers = async () => {
    setLoading(true);
    try {
      // get ref
      const listingsRef = collection(db, "listings");

      // create a query
      const q = query(
        listingsRef,
        where("type", "==", params.slug),
        where("offer", "==", true),
        orderBy("timestamp", "desc")
      );
      // execute query
      const querySnap = await getDocs(q);
      console.log(querySnap);

      const listings: any[] = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setValue("Offers only");
      setLoading(false);
    } catch (error) {
      console.log("Error fetching listings", error);
    }
  };

  return (
    <>
      <HeaderNav />
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
        <>
          <MainSec
            listings={listings}
            orderListingsByLowestPrice={orderListingsByLowestPrice}
            orderListingsByHighestPrice={orderListingsByHighestPrice}
            fetchListingsDefault={fetchListingsDefault}
            orderListingsByoffers={orderListingsByoffers}
            categoryName={params.slug}
            sortvalue={value}
          />
        </>
      )}
      <MainNav />
    </>
  );
}

export default Page;
