import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import ReactWhatsapp from "react-whatsapp";
import MessageModal from "./MessageModal";

function ContactBtns({ landLord }: { landLord: any }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="my-4 flex items-center justify-center space-x-2">
        <button
          onClick={handleOpen}
          className="messageBtn w-1/2 flex items-center py-2 capitalize md:px-8 rounded-lg md:text-xl font-semibold justify-center border-2 border-[--sec-text-color] text-[--main-text-color] bg-[--sec-text-color] hover:bg-blue-600 transition-all "
        >
          send Message
          <AiOutlineMessage className="h-6 w-6 ml-2 msg-icon" />
        </button>
        <ReactWhatsapp
          element="webview" // Add the required 'element' property
          number={`${landLord?.number}`}
          message={`Hey,${landLord?.name} `}
          className="messageBtn w-1/6 flex items-center py-2 md:py-2.5 capitalize px-4 h-full rounded-lg text-xl font-semibold justify-center border-2 border-[#42C452] text-[--main-text-color] bg-[#42C452] hover:bg-green-600 transition-all "
        >
          <BsWhatsapp className="h-6 w-6" />
        </ReactWhatsapp>
      </div>
      <MessageModal open={open} setOpen={setOpen} landLord={landLord} />
    </>
  );
}

export default ContactBtns;
