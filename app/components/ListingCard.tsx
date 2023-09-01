import React, { useState } from "react";
import Images from "../category/[slug]/components/Images";
import handleTime from "@/app/utilits/helpers/handleTime";
import CardDesc from "./CardDesc";
import Link from "next/link";
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import DeleteModal from "../profile/components/DeleteModal";
import UpdateModal from "../profile/components/UpdateModal";

function CategoryCard({
  listing,
  id,
  handleEdit,
  handleDelete,
  page
}: {
  listing: any;
  id: string;
  handleEdit?: any;
  handleDelete?: any;
  page ? :string ;
}) {
  const [openDelModal, setOpenDelModal] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const handleClickOpen = () => {
    setOpenDelModal(true);
  };
  const handleOpenUpdateModal = ()=>{
    setOpenUpdateModal(true)
  }
  return (
    <div>
      <div className="headerInfo flex justify-between items-center w-full px-5 absolute top-5 -left-1 z-10  text-sm font-semibold text-[--main-color]  capitalize">
        <span className=" bg-gray-300/70 py-1 px-4 rounded-2xl">
          {handleTime(listing.timestamp.seconds)}
        </span>
        <span className="bg-gray-300/70   py-1 px-4 rounded-2xl">
          For {listing.type}
        </span>
      </div>
      <div className={`card ${page === "explore" ? 'bg-slate-50 '  : 'bg-[--bg-color]'} rounded-lg !min-h-full shadow-md hover:shadow-md hover:shadow-[--sec-text-color] shadow-slate-300 transition-all duration-300 opacity-95 hover:opacity-100`}>
        {handleDelete && (
          <div className="userBtns absolute bottom-[6.5rem]  right-2  py-2 px-4 bg-blue-400/70 rounded-s-xl z-50 space-x-4 flex justify-center items-center  ">
            <button
              onClick={handleClickOpen}
              className="ms-2 px-2 py-1 text-red-600 bg-white flex items-center  rounded-lg "
            >
              <BsFillTrash3Fill />
            </button>
            <button
              onClick={handleOpenUpdateModal}
              className="px-2 py-1 text-[--sec-text-color] bg-white flex items-center  rounded-lg "
            >
              <AiFillEdit />
            </button>
          </div>
        )}
        <Link
          href={`/category/${listing.type}/listing/${id}`}
          className="!cursor-pointer"
        >
          <Images images={listing.imgUrls} page={page} />
          <CardDesc listing={listing} page={page} />
        </Link>
      </div>

      {openDelModal && (
        <DeleteModal
          open={openDelModal}
          setOpen={setOpenDelModal}
          handleDelete={handleDelete}
          id={id}
        />
      )}
      {openUpdateModal && (
        <UpdateModal
          open={openUpdateModal}
          setOpen={setOpenUpdateModal}
          id={id}
        />
      )}
    </div>
  );
}

export default CategoryCard;
