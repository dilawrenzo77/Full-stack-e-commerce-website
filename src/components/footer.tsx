import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-between gap-4 w-full px-4">
        <div className="px-4 flex flex-col items-center justify-between sm:flex-row  w-full"> 
          <div className="">
            <p className="text-4xl font-cinzel text-neutral-950 font-bold">VELDT</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <p className="text-sm sm:text-lg  xl:text-xl text-neutral-950 font-cinzel cursor-pointer hover:opacity-80">Products</p>
              <p className="text-sm sm:text-lg  xl:text-xl text-neutral-950 font-cinzel cursor-pointer hover:opacity-80">Collections</p>
              <p className="text-sm sm:text-lg  xl:text-xl text-neutral-950 font-cinzel cursor-pointer hover:opacity-80">FAQs</p>
              <p className="text-sm sm:text-lg  xl:text-xl text-neutral-950 font-cinzel cursor-pointer hover:opacity-80">About Us</p>
              <p className="text-sm sm:text-lg  xl:text-xl text-neutral-950 font-cinzel cursor-pointer hover:opacity-80">Contacts</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaFacebookF size={20} className="text-neutral-950 cursor-pointer hover:opacity-80"/>
              <FaXTwitter size={20} className="text-neutral-950 cursor-pointer hover:opacity-80"/>
              <FaInstagram  size={20} className="text-neutral-950 cursor-pointer hover:opacity-80"/>
              <FaGithub size={20} className="text-neutral-950 cursor-pointer hover:opacity-80"/> 
            </div>
          </div>
        </div>
        <p className="text-xs text-neutral-400">&copy;Copyright veldt</p>
    </div>
    )  
};
