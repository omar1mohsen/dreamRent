import handleTime from "@/app/utilits/helpers/handleTime";
import { db } from "@/firebase";
import { DocumentData, doc, getDoc } from "@firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiBed, BiBuildingHouse, BiChair } from "react-icons/bi";
import { BsThermometerHigh } from "react-icons/bs";
import { FaBath } from "react-icons/fa";
import { LuParkingSquare } from "react-icons/lu";
import { MdSevereCold } from "react-icons/md";
import ListingPrice from "./ListingPrice";
import SimilarListing from "@/app/components/SimilarListing";
import ContactBtns from "./ContactBtns";

function ListingNav({ listing }: { listing: any }) {
  const navItems = ["overview", "Home value", "landLord", "similar homes"];
  const [landLord, setLandLord] = useState<DocumentData | undefined>();

  const document = window.document;
  const navLinks = document.querySelectorAll(".navItem");

  // handle active link
  const handleNav = (e: any) => {
    navLinks.forEach((link: any) => {
      link.classList.remove("active-link");
    });
    e.target.classList.add("active-link");
  };

  useEffect(() => {
    const fetchLandLord = async () => {
      const landLordRef = doc(db, "users", listing.userRef);
      try {
        await getDoc(landLordRef).then((res) => {
          setLandLord(res.data());
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchLandLord();
  }, [listing.userRef]);
  return (
    <>
      <ContactBtns landLord={landLord} />
      <div className="max-h-[55vh] overflow-y-scroll scroll-smooth relative">
        <ul className="flex max-lg:justify-center py-3  border-t-2 border-b-2 border-[--sec-text-color] sticky top-0 z-10 bg-[--main-text-color] ">
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                className="px-1.5 md:px-2 capitalize max-sm:text-xs  font-semibold text-[--sec-color] hover:text-[--sec-text-color] transition-all"
                onClick={handleNav}
              >
                <Link
                  className={`navItem  ${item === "overview" && "active-link"}`}
                  href={`#${item}`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <section id="details" className=" my-2">
          <div className="details-box flex items-center my-4">
            <BiBuildingHouse className="mr-3 text-blue-700 w-6 h-6" />
            <span className="font-light">Single family residence</span>
          </div>

          <div className="details-box flex items-center my-4">
            <MdSevereCold className="mr-3 text-blue-700 w-6 h-6" />
            <span className="">Electric</span>
          </div>

          <div className="details-box flex items-center my-4">
            <BsThermometerHigh className="mr-3 text-blue-700 w-6 h-6" />
            <span className="">Natural gas</span>
          </div>

          <div className="details-box flex items-center my-4">
            <BiBed className="mr-3 text-blue-700 w-6 h-6" />
            <span className="capitalize">
              {+listing.bedrooms === 1
                ? "one bedroom"
                : `${listing.bedrooms} bedrooms `}
            </span>
          </div>

          <div className="details-box flex items-center my-4">
            <FaBath className="mr-3 text-blue-700 w-6 h-6" />
            <span className="capitalize">
              {+listing.pathrooms === 1
                ? "one bathroom"
                : `${listing.pathrooms} bathrooms `}
            </span>
          </div>
          {listing.parking && (
            <div className="details-box flex items-center my-4">
              <LuParkingSquare className="mr-3 text-blue-700 w-6 h-6" />
              <span className="capitalize">Attached with garage</span>
            </div>
          )}
          {listing.furnished && (
            <div className="details-box flex items-center my-4">
              <BiChair className="mr-3 text-blue-700 w-6 h-6" />
              <span className="capitalize">Attached with Modern furniture</span>
            </div>
          )}
        </section>
        <hr className="my-2 block" />
        <section id="overview" className="py-3">
          <h3 className="text-3xl max-sm:text-xl font-bold capitalize tracking-wider text-[--sec-text-color] mt-2 mb-4">
            overview
          </h3>
          <span className="my-2 capitalize block max-sm:text-xs font-semibold text-[--sec-color]">
            Listing Address:{" "}
            <span className="text-[--sec-text-color] max-sm:text-xs">
              {listing.address}
            </span>{" "}
          </span>
          <p className="my-2 md:w-[85%] max-sm:text-xs flex flex-col font-semibold leading-relaxed text-justify  text-[--sec-text-color] ">
            {" "}
            <span className="font-semibold max-sm:text-xs text-[--sec-color] me-2">
              Summary:
            </span>{" "}
            {listing.description}
          </p>
        </section>
        <hr className="my-2 block" />
        <section id="Home value" className="py-3">
          <h3 className="text-3xl max-sm:text-xl  font-bold capitalize tracking-wider text-[--sec-text-color] mt-2 mb-4">
            Estimated market value
          </h3>
          <span className="text-center text-xl max-sm:text-lg  block my-3 font-semibold text-[--sec-color]">
            Home Value
          </span>
          <ListingPrice listing={listing} className="!justify-center" />
          {
            <span className="my-4 capitalize block max-sm:text-sm  font-semibold text-[--sec-color] text-center">
              Estimated sales range: $
              {+listing.regularPrice > 50000
                ? +listing.regularPrice - 10000
                : +listing.regularPrice < 5000
                ? +listing.regularPrice - 500
                : null}{" "}
              - $
              {+listing.regularPrice > 50000
                ? +listing.regularPrice + 10000
                : +listing.regularPrice + 2000}
            </span>
          }
        </section>
        <hr className="my-2 block" />

        <section id="landLord" className="py-3">
          <h3 className="text-3xl max-sm:text-xl  font-bold capitalize tracking-wider text-[--sec-text-color] mt-2 mb-4">
            LandLord
          </h3>
          <span className="my-4 max-sm:text-sm capitalize block font-semibold text-[--sec-color]">
            listed By :{" "}
            <span className="text-[--sec-text-color]">{landLord?.name}</span>
          </span>
          <span className="my-4 max-sm:text-sm capitalize block font-semibold text-[--sec-color]">
            Listing updated:{" "}
            <span className="text-[--sec-text-color]">
              {handleTime(listing.timestamp.seconds)}
            </span>{" "}
          </span>
          <span className="my-4 max-sm:text-sm capitalize block font-semibold text-[--sec-color]">
            DreamRent last checked:{" "}
            <span className="text-[--sec-text-color]">
              {" "}
              {Math.ceil(Math.random() * 12)} hours ago
            </span>{" "}
          </span>
        </section>
        <hr className="my-2 block" />
        <section id="similar homes" className="py-3">
          <h3 className="text-3xl max-sm:text-xl  font-bold capitalize tracking-wider text-[--sec-text-color] mt-2 mb-4">
            similar homes
          </h3>
          <SimilarListing listing={listing} />
        </section>
      </div>
    </>
  );
}

export default ListingNav;
