import ModalCloseBtn from "@/app/components/ModalCloseBtn";
import { Box, Modal, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../Modal.module.css";
import { useDispatch } from "react-redux";
import { showUpdateModal as handleModal } from "@/app/store/showmodel/ShowUpdate";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { db } from "@/firebase";
import { UserAuth } from "@/app/context/AuthContext";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import ListingCard from "../../components/ListingCard";
import { toast } from "react-toastify";

function MyListingsModal({ showUpdateModal }: { showUpdateModal: boolean }) {
  const dispatch = useDispatch();
  const [listings, setListings] = useState<any>();
  const [loading, setLoading] = useState(true);
  const { user } = UserAuth();
  const handleClose = () => {
    dispatch(handleModal());
  };


  useEffect(() => {
    const fectchListing = async () => {
      try {
        const userRef = collection(db, "listings");
        const q = query(
          userRef,
          where("userRef", "==", user.uid),
          orderBy("timestamp", "desc")
        );
        // execute query
        const querySnap = await getDocs(q);

        const listings: any = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };


  
    fectchListing();
  }, [user.uid]);

  const handleDelete = async (id : string) => {
    setLoading(true)
    try {
      const newListings =  listings.filter((listing: { id: string; })=>{
        return listing.id !== id
      })
      setListings(newListings)
      const docRef =  doc(db, "listings", id)
       await deleteDoc(docRef).then(()=>{
        toast.success('Your post has been deleted successfully')
      })
    } catch (error) {
      toast.error(':( sorry, something wrong happened')
    }
    setLoading(false)
  };

  const handleEdit = () => {
    console.log("edit");
  };

  return (
    <Modal
      open={showUpdateModal}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className="bg-black/60  flex justify-center items-center"
    >
      <Slide direction="right" in={showUpdateModal} mountOnEnter unmountOnExit>
        {loading ? (
          <div className="">
            <LoadingSpinner />
          </div>
        ) : (
          <Box className={`${styles.listingsModal} min-w-[60%]`}>
            <ModalCloseBtn handleClose={handleClose} />
            {listings.length < 1 ? (
              <div className="w-full min-h-[50vh] flex justify-center items-center">
              <h3 className={`${styles.modalHeader} capitalize !mx-0 !text-[--sec-text-color]`}>
                You didn`t Create any Listing yet 
              </h3>
              </div>
            ) : (
              <>
                <h3
                  className={`${styles.modalHeader} !mx-0 !text-[--sec-color]`}
                >
                  Your Listings
                </h3>
                <hr className="my-2" />
                <div className="listings-contaniner flex flex-row flex-wrap justify-start items-center">
                  {listings.map((listing: any) => {
                    return (
                      <div
                        key={listing.id}
                        className="w-full sm:w-1/2 lg:w-1/3 p-2 relative "
                      >
                        <ListingCard
                          key={listing.id}
                          id={listing.id}
                          listing={listing.data}
                          handleEdit={handleEdit}
                          handleDelete={handleDelete}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </Box>
        )}
      </Slide>
    </Modal>
  );
}

export default MyListingsModal;
