"use client";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { db } from "@/firebase";
import { doc, getDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import MainListing from "./components/MainListing";
import MainNav from "@/app/components/MainNav";
import HeaderNav from "@/app/components/HeaderNav";

function Page({ params }: { params: { listing: string } }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [listing, setListing] = useState<any>();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const listingRef = doc(db, "listings", params.listing);
        await getDoc(listingRef).then((res) => {
          setListing(res.data());
          setLoading(false);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchListing();
  }, [params.listing]);
  return (
    <>
      <HeaderNav />
      {loading ? <LoadingSpinner /> : <MainListing listing={listing} />}
      <MainNav />
    </>
  );
}

export default Page;
