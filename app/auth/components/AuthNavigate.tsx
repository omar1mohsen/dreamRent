import React from "react";
import Link from "next/link";
function AuthNavigate({ linkToSignUp }: { linkToSignUp: boolean }) {
  const handleContent = () => {
    if (linkToSignUp === true) {
      return (
        <p className="mt-4 italic text-gray-500 font-ligh">
          I`m new here{" "}
          <span className="underline font-bold  text-[--sec-text-color]">Sign Up</span>
        </p>
      );
    } else {
      return (
        <p className="mt-4 italic text-gray-500 font-ligh">
          i have account already{" "}
          <span className="underline font-bold text-[--sec-text-color] ">Login</span>
        </p>
      );
    }
  };
  return (
    <Link
      href={`${linkToSignUp? "/auth/signup" : "/auth/signin"}`}
      className="my-3 block text-center "
    >
      {handleContent()}
    </Link>
  );
}

export default AuthNavigate;
