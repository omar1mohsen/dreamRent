import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BiSolidLockAlt } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { CircularProgress } from "@mui/material";
import { getAuth, sendPasswordResetEmail } from "@firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalCloseBtn from "@/app/components/ModalCloseBtn";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function UpdatePassword({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [email, setEmail] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };

  // handle onchange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // check email
  function IsValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // handle rest password
  const handleRest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const auth = getAuth();
    if (IsValidEmail(email)){
         sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          setLoading(false)
          toast.success('your message has been sent successfully check your email')
        }).then(()=>{
            setEmail('')
            handleClose()
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
            toast.error(`${errorMessage}`)
        });
    }else{
        toast.error('Please Set Vaild Email')
    }

  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className="bg-black/90"
    >
      <Box
        sx={{ ...style }}
        className="relative rounded-xl text-[--main-text-color] bg-gray-900/90 shadow-xl px-3 pt-2 pb-12 w-[90%] md:w-[60%] shadow-slate-900/70"
      >
        <ModalCloseBtn handleClose={handleClose} />
        <BiSolidLockAlt className="block mx-auto my-2 w-36 h-36 text-[--sec-text-color]" />
        <h2
          id="parent-modal-title"
          className="my-2 text-center text-3xl font-bold"
        >
          Forgot Your Password ?
        </h2>
        <p className="text-center my-2 te">You can reset your password here</p>
        <form onSubmit={handleRest} className="relative">
          <input
            type="email"
            onChange={handleChange}
            value={email}
            required
            placeholder="Set Your Email"
            className="w-full md:w-[90%] text-lg font-bold md:mx-auto md:block text-[--sec-text-color] focus:outline-2 outline-gray-400 focus:outline-none my-3 rounded-xl px-4 py-2"
          />
          <button type="submit">
            {loading ? (
              <CircularProgress className="cursor-default w-16 h-16 absolute right-0 top-[20%] translate-y-[-20%] text-[--sec-text-color] md:right-[6%] md:top-[.5px]" />
            ) : (
              <BsFillArrowRightCircleFill className="w-16 h-16 absolute -right-1 top-[50%] translate-y-[-50%] text-[--sec-text-color] md:right-[4%] md:top-[25%] hover:text-red-700 transition" />
            )}
          </button>
        </form>
      </Box>
    </Modal>
  );
}

export default UpdatePassword;
