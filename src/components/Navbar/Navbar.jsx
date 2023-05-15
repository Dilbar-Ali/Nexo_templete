import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/apple-touch-icon.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" bg-blue-800 ">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50  p-5 md:w-auto w-full flex justify-between">
          <div className="flex justify-center  items-center">
            <div>
             
              <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
              </div>
              <div>
                <h1 className="ml-2 font-medium text-white text-2xl">nexo</h1>
              </div>
           
          </div>

          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden  items-center  text-sm font-[Poppins]">
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-gray-900 fixed w-full top-0  overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
          <div className="py-5">
            <div className="">
              <div>
                <Button />
              </div>
              <div></div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
