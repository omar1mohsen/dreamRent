"use client";
import React, { useState, useEffect, useCallback } from "react";
import { auth, db } from "@/firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "@firebase/firestore";
import { FormData } from "@/app/auth/signup/page";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "@firebase/auth";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import AddPostBtn from "./AddPostBtn";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import CreateModal from "@/app/profile/components/CreateModal";
import MyListingsModal from "./MyListingsModal";
import { UserAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import { FcInfo } from "react-icons/fc";
import { motion } from "framer-motion";

function MainProfile() {
  const { user } = UserAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [error, setError] = useState<string | null>();
  const [prevData, setPrevData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    number: "",
    address: "",
    email: "",
  });
  const { name, number, address, email } = formData;
  // show modal state
  const showState = useSelector((state: RootState) => state.showModal.value);
  const showUpdateModal = useSelector(
    (state: RootState) => state.ShowUpdate.value
  );

  // get user
  const currentUser = auth?.currentUser;
  const userRef = doc(db, "users", `${currentUser?.uid}`);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const catchUser = async () => {
    setLoading(true);
    try {
      if (currentUser) {
        await getDoc(userRef).then((res) => {
          setPrevData(res.data());
          res &&
            setFormData({
              name: res.data()?.name,
              number: res.data()?.number,
              email: res.data()?.email,
              address: res.data()?.address,
            });
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (currentUser?.displayName !== name) {
      catchUser();
    }
  }, []);

  // handle onchange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  // handle sumbit
  const onSubmit = async () => {
    setError("");
    if (
      prevData.name != name ||
      prevData.number != number ||
      prevData.address != address
    ) {
      if (name.length > 3 && number.length >= 11 && address.length > 6) {
        try {
          setLoading(true);
          await updateDoc(userRef, {
            name,
            number,
            address,
            email,
            updateTime: serverTimestamp(),
          }).then(() => {
            updateProfile(auth.currentUser as any, {
              displayName: name,
            });
            setLoading(false);
            toast.success("updated successfully");
          });
        } catch (error) {
          toast.error("Cannot Update This Data");
        }
      } else {
        setError("Enter vaild Data :(");
        setChangeDetails((prev) => !prev);
      }
    }
  };
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
        <motion.main
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-2 pb-16 px-2 sm:px-10 bg-[--bg-color]"
        >
          {!user ? (
            <div className="min-h-[65vh] flex flex-col justify-center items-center">
              <FcInfo className="w-24 h-24 mb-2 animate-bounce" />
              <h3 className="capitalize text-center text-xl font-semibold text-[--sec-color]">
                before you can access our full range of features and benefits,
                <br />
                we require you to login first.{" "}
                <Link
                  className="text-[--sec-text-color] underline"
                  href={"/auth/signin"}
                >
                  Login From here
                </Link>
              </h3>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-4xl my-3 text-[--sec-text-color] uppercase">
                  My Profile
                </h3>
              </div>
              <hr className="my-2" />
              <section className="py-2">
                <div className="header flex justify-between items-center">
                  <p className="text-lg font-bold uppercase text-[--sec-color]">
                    Profile Details
                  </p>
                  <p
                    onClick={() => {
                      changeDetails && onSubmit();
                      setChangeDetails((prev) => !prev);
                    }}
                    className="font-bold text-[--sec-text-color] cursor-pointer select-none  hover:text-[--red-text-color] transition"
                  >
                    {changeDetails ? "Done" : "Change"}
                  </p>
                </div>
                {error && (
                  <span className="text-[var(--red-text-color)] font-semibold italic mt-1 px-1 text-center w-full block">
                    {error}
                  </span>
                )}
                <div className="profileCard">
                  <div className="flex flex-row items-center space-x-2">
                    <label
                      htmlFor="name"
                      className="font-bold text-[--sec-color] w-16 md:w-20"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`${
                        changeDetails ? "ActiveInput" : "DisableInput"
                      } my-3 transition`}
                      value={name}
                      disabled={!changeDetails}
                      readOnly={!changeDetails}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <label
                      htmlFor="email"
                      className="font-bold text-[--sec-color] w-16 md:w-20"
                    >
                      Email:
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="DisableInput my-3 transition"
                      value={email}
                      disabled={true}
                      readOnly={true}
                    />
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <label
                      htmlFor="address"
                      className="font-bold text-[--sec-color] w-16 md:w-20"
                    >
                      Address:
                    </label>
                    <input
                      type="text"
                      id="address"
                      className={`${
                        changeDetails ? "ActiveInput" : "DisableInput"
                      } my-3 transition`}
                      value={address}
                      disabled={!changeDetails}
                      readOnly={!changeDetails}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <label
                      htmlFor="number"
                      className="font-bold text-[--sec-color] w-16 md:w-20"
                    >
                      Number:
                    </label>
                    <input
                      type="text"
                      id="number"
                      className={`${
                        changeDetails ? "ActiveInput" : "DisableInput"
                      } my-3 transition`}
                      value={number}
                      disabled={!changeDetails}
                      readOnly={!changeDetails}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </section>
              <hr className="my-2" />
              <AddPostBtn />
              {showState && <CreateModal showState={showState} />}
              {showUpdateModal && (
                <MyListingsModal showUpdateModal={showUpdateModal} />
              )}
            </>
          )}
        </motion.main>
      )}
    </>
  );
}

export default MainProfile;
