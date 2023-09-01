"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, db, googleProvider } from "@/firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc, serverTimestamp, setDoc } from "@firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useRouter();

  const signUp = async (email, password, formDataCopy) => {
    const userData = await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        return res.user;
      })
      .then((acc) => setDoc(doc(db, "users", acc?.uid), formDataCopy))
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: formDataCopy.name,
        });
      })
      .then(() => {
        navigate.push("/");
      })
      .then(() => toast.success(`Welcome ${formDataCopy.name}`));
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate.push('/')
        setUser(null);
      })
      .then(() => toast.info("Wish You Back As Soon AS"));
  };

  const singInByGoogle = async () => {
   const res =   await signInWithPopup(auth, googleProvider)
   const account = res.user
   const docRef = doc(db,'users',account.uid)
   try{
     const docSnap = await getDoc(docRef)
     if(!docSnap.exists()){
      setDoc(docRef,{
        name : account.displayName ,
        email: account.email,
        timestamp : serverTimestamp()
      })
     }
     toast.success(`Welcome ${account.displayName}`)
     navigate.push('/')
  }catch(error){
    toast.error('Could Not authorize with google')
  }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <UserContext.Provider
      value={{
        user,
        signUp,
        signIn,
        logOut,
        singInByGoogle,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
