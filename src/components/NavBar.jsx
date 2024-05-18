import React from "react";
import { useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbReportMoney } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineBank } from "react-icons/ai";

function NavBar() {
  const navigate = useNavigate();

  const isActive = (path) => {
    return path === window.location.pathname;
  };

  return (
    <div className="flex flex-col gap-4 items-center w-[15%] bg-[#FFFFFF] drop-shadow-md font-[raleway] text-xl">
      <div className="flex items-center justify-center gap-2 mt-6 mb-12 text-2xl font-bold">
        <AiOutlineBank className="h-10 w-10" />
        <div className="tracking-wider">Fincy</div>
      </div>
      <div
        className={`${
          isActive("/") ? "bg-[#f5dbdf]" : "hover:bg-[#f8eeef]"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/")}
      >
        <LuLayoutDashboard className="h-7 w-7" />
        <div className="font-bold">Dashboard</div>
      </div>
      <div
        className={`${
          isActive("/income") ? "bg-[#f5dbdf]" : "hover:bg-[#f8eeef]"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/income")}
      >
        <GiReceiveMoney className="h-7 w-7" />
        <div className="font-bold">Income</div>
      </div>
      <div
        className={`${
          isActive("/expense") ? "bg-[#f5dbdf]" : "hover:bg-[#f8eeef]"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/expense")}
      >
        <TbReportMoney className="h-7 w-7" />
        <div className="font-bold">Expense</div>
      </div>
      <div
        className={`${
          isActive("/savings") ? "bg-[#f5dbdf]" : "hover:bg-[#f8eeef]"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/savings")}
      >
        <MdAttachMoney className="h-7 w-7" />
        <div className="font-bold">Savings</div>
      </div>
      <div
        className={`${
          isActive("/reports") ? "bg-[#f5dbdf]" : "hover:bg-[#f8eeef]"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/reports")}
      >
        <TbReportMoney className="h-7 w-7" />
        <div className="font-bold">Reports</div>
      </div>
      <div className="flex items-center justify-center gap-8 fixed bottom-0 px-7 my-12">
        <a
          href="https://github.com/dushyant2901/Fincy"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="h-7 w-7 cursor-pointer text-[#f797a6]  hover:text-black" />
        </a>

        <a
          href="  https://in.linkedin.com/in/dushyant-pratap-singh-04b24619b"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-7 w-7 cursor-pointer text-[#f797a6]  hover:text-blue-600" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
