import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaCalendarDay, FaRegChartBar } from "react-icons/fa";
import Container from "../Shared/Container/Container";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdChecklistRtl } from "react-icons/md";
import { FaClipboardUser } from "react-icons/fa6";
const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const url = [
    {
      baseUrl: "/statics",
      UrlName: "Statistics",
      icon: <FaRegChartBar />,
    },
    {
      baseUrl: "/moneyCollection",
      UrlName: "Money recieve",
      icon: <FaMoneyBillTransfer />,
    },
    {
      baseUrl: "/mealList",
      UrlName: "Meal list",
      icon: <MdChecklistRtl />,
    },
    {
      baseUrl: "/addMealDay",
      UrlName: "Add Meal Day",
      icon: <FaCalendarDay />,
    },
    {
      baseUrl: "/allMembers",
      UrlName: "All Members",
      icon: <FaClipboardUser />,
    },
  ];
  return (
    <div className="container mx-auto max-w-[1600px]">
      <div className="bg-primary w-full xl:hidden block">
        <Container>
          {/* Navbar */}
          <div className=" flex justify-between  items-center ">
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

      <div className="flex ">
        <div className="xl:w-[20%] h-full min-h-screen bg-primary w-0">
          <div className="bg-primary h-full w-full text-fourth py-3">
            <div className="flex justify-center items-center pt-5">
              <div className="relative group">
                <img
                  className="w-[50px] h-[50px] bg-slate-500 object-cover rounded-full"
                  src="https://source.unsplash.com/300x300/?profile"
                  alt=""
                />
                <span className="h-3 w-3 bg-white p-[2px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-2 left-[50%] -translate-x-1/2">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#60A5FA"
                  >
                    {" "}
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>{" "}
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>{" "}
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title></title>{" "}
                      <g id="Complete">
                        <g data-name="add" id="add-2">
                          <g>
                            {" "}
                            <line
                              fill="none"
                              stroke="#60A5FA"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              x1="12"
                              x2="12"
                              y1="19"
                              y2="5"
                            ></line>
                            <line
                              fill="none"
                              stroke="#60A5FA"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              x1="5"
                              x2="19"
                              y1="12"
                              y2="12"
                            ></line>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-12 ">
              {url.map((item) => (
                <Link key={item.UrlName} to={item.baseUrl}>
                  <h2 className="px-3 text-lg font-medium border-b pb-3 group flex  items-center duration-200 transition-all hover:gap-4 gap-2">
                    <span className="flex gap-2 items-center font-semibold">
                      <span className="text-[#007AFF] font-bold">
                        {item.icon}
                      </span>{" "}
                      {item.UrlName}
                    </span>{" "}
                    <span className="p-2 bg-[#E6F2FF] text-[#007AFF] ml-auto duration-500 transition-all mr-6 group-hover:mr-0 rounded-full">
                      <FaArrowRight />
                    </span>
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="xl:w-[80%] w-full bg-[#F2F2F7]">
          <Outlet></Outlet>
        </div>
      </div>

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
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#60A5FA"
                >
                  {" "}
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>{" "}
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>{" "}
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title></title>{" "}
                    <g id="Complete">
                      <g data-name="add" id="add-2">
                        <g>
                          {" "}
                          <line
                            fill="none"
                            stroke="#60A5FA"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="12"
                            x2="12"
                            y1="19"
                            y2="5"
                          ></line>
                          <line
                            fill="none"
                            stroke="#60A5FA"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="5"
                            x2="19"
                            y1="12"
                            y2="12"
                          ></line>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-12 ">
          {url.map((item) => (
                <Link key={item.UrlName} to={item.baseUrl}>
                  <h2 className="px-3 text-lg font-medium border-b pb-3 group flex  items-center duration-200 transition-all hover:gap-4 gap-2">
                    <span className="flex gap-2 items-center font-semibold">
                      <span className="text-[#007AFF] font-bold">
                        {item.icon}
                      </span>{" "}
                      {item.UrlName}
                    </span>{" "}
                    <span className="p-2 bg-[#E6F2FF] text-[#007AFF] ml-auto duration-500 transition-all mr-6 group-hover:mr-0 rounded-full">
                      <FaArrowRight />
                    </span>
                  </h2>
                </Link>
              ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Layout;
