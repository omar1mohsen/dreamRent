import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalCloseBtn from "@/app/components/ModalCloseBtn";
import { GrMail } from "react-icons/gr";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MessageModal({
  open,
  setOpen,
  landLord
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  landLord : any;
}) {
  const [message, setMessage] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };
  // handle onchange
  const handleChange = (
    event: React.ChangeEventHandler<HTMLTextAreaElement> | any
  ) => {
    setMessage(event.target.value);
  };
  //handle click 
  const handleClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    if(message && message.length > 10){
        window.location.href = `mailto:${landLord.email}?Subject="inquire about your Post"&body=${message}`
        toast.success('Message Has Been Sent')
        handleClose()
        setMessage("")
    }else{
        toast.error('Please Write a Vaild Message')
    }
  }

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className="bg-black/70"
    >
      <Box
        sx={{ ...style }}
        className="relative rounded-xl text-[--main-text-color] w-[90%] md:w-[60%] bg-gray-900/90 shadow-xl px-4 pt-4 py-12  shadow-slate-900/70"
      >
        <ModalCloseBtn handleClose={handleClose} />
        <GrMail className="block mx-auto my-2 w-10 h-10 text-[--sec-text-color]" />
        <h2
          id="parent-modal-title"
          className="my-2 text-center text-3xl font-bold"
        >
          Send A message
        </h2>
        <textarea
          rows={10}
          onChange={handleChange}
          value={message}

          placeholder="Write Your Message"
          className="w-full md:w-[90%] text-lg font-bold md:mx-auto md:block text-[--sec-text-color] focus:outline-2 outline-gray-400 focus:outline-none my-3 rounded-xl px-4 py-2"
        />
        <button
        onClick={handleClick}
          className="flex justify-center w-1/2 mx-auto items-center text-lg font-semibold tracking-widest py-3 border-2 border-[--sec-text-color] rounded-xl bg-[--sec-text-color] hover:bg-[--main-text-color] hover:text-[--sec-text-color]"
        >
          Submit
        </button>
      </Box>
    </Modal>
  );
}

export default MessageModal;
