import { AiFillCopyrightCircle } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { CONTACTS, SOCIAL_LINKS } from "../constants/constants";

const Footer = () => {
  return (
    <div id="intro" className="mt-4 mb-10 lg:mb-0">
      <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
        <div className="flex items-center">
          <div className="mr-1 text-base">
            <AiFillCopyrightCircle />
          </div>
          <span>2025 All Rights Reserved.</span>
        </div>
        <div className="flex items-center">
          <a href={SOCIAL_LINKS.COFFEE} target="_blank" rel="noreferrer">
            Buy a coffee for me ☕
          </a>
        </div>
        <div className="hidden md:flex items-center">
          <div className="mr-1 text-base">
            <MdMail />
          </div>
          <div>{CONTACTS.EMAIL}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
