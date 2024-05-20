import Image from "next/image";
import React from "react";
import { FaMicrophone } from "react-icons/fa";
import BackgroundChat from "../public/BackgroundChat.jpg";

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center border rounded-md mx-24 shadow relative overflow-hidden ">
      <div className="relative w-full">
        <div className="absolute inset-0 z-[-1]">
          <Image
            src={BackgroundChat}
            alt="background image"
            width={2000}
            height={900}
          />
        </div>
      </div>
      <div className="min-h-[670px]"></div>
      {/* input */}
      <div className="items-center bg-white justify-center border rounded-full shadow px-2 py-2 mb-7">
        <div className="flex ">
          <input
            style={{ width: "1000px" }}
            className="outline-none ml-4 mr-4 "
            type="text"
            placeholder="Type here..."
          />
          <div className="border rounded-full bg-slate-200 px-3 py-3">
            <FaMicrophone className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>
      {/* input */}
    </div>
  );
}
