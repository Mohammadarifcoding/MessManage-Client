import React, { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../Shared/Footer/Footer";
import Container from "../Shared/Container/Container";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="container mx-auto max-w-[1600px]">
      <div className="bg-primary w-full">
        <Container>
          <div className="flex justify-between  items-center ">
            {/* Navbar */}
            <div className=" px-3 py-4  text-fourth">
              <div className="flex gap-3 items-center">
                <img className="w-[40px]" src="/MassManageLogo.png" alt="" />
                <h2 className="text-xl">MassManage</h2>
              </div>
            </div>
            <div
              onClick={toggleDrawer}
              className="  h-full flex items-center gap-2 hover:bg-secondary p-2 rounded-3xl"
            >
              <div className="relative group">
                <img
                  className="w-[50px] h-[50px] bg-slate-500 object-cover rounded-full"
                  src="https://source.unsplash.com/300x300/?profile"
                  alt=""
                />
                <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
              </div>
              <div className="text-[18px] text-white">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Outlet></Outlet>

      {/* Drawer */}
      <Drawer
        direction="left"
        open={isOpen}
        onClose={toggleDrawer}
        className=""
      >
        <div className="bg-primary h-full w-full text-fourth py-3">
            
            <div className="flex justify-center items-center pt-5">
            <div className="relative group">
                <img
                  className="w-[50px] h-[50px] bg-slate-500 object-cover rounded-full"
                  src="https://source.unsplash.com/300x300/?profile"
                  alt=""
                />
              <span className="h-3 w-3 bg-white p-[2px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-2 left-[50%] -translate-x-1/2">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"><g data-name="add" id="add-2"><g> <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line><line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line></g></g></g></g>
                        </svg>
                    </span>
              </div>
            </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Layout;
