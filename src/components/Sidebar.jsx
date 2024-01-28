import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { MenuCloseIcon } from "../assets/icons";
import Logo from "../assets/Logo.png";
import SidebarAvatar from "../assets/Sidebar/SidebarAvatar.svg";
import { Bolt, LogOut } from "lucide-react";

export default function Sidebar({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <div className="row-span-full rounded-[16px] m-3 bg-navbar-white hidden tablet:flex flex-col items-center py-4 px-[10px] gap-4 text-black">
        <div className="flex flex-col gap-6 items-center w-full grow">
          {/* company */}
          <div className="flex items-center w-[192px] px-5">
            <img src={Logo} alt="company icon" className="mr-1" />

            <div className="flex">
              <span className="font-bold">OrangeFarm</span>
            </div>
          </div>

          {/* navigation */}
          <Navbar />
        </div>

        <nav className="w-full">
          <ul className="flex flex-col gap-1">
            <NavLink className="group flex items-center transition-all py-2 px-4 gap-3 rounded hover:bg-navbar-100">
              <img src={SidebarAvatar} />
              <div className="flex flex-col gap-[2px]">
                <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-all ">
                  Gustavo Xavier
                </span>
                <div className="bg-navbar-yellow rounded-full w-[46px] px-1">
                  <span className="text-xs opacity-80 text-black">Admin</span>
                </div>
              </div>
            </NavLink>
            <NavLink className="group flex items-center transition-all py-2 px-4 gap-3 rounded hover:bg-navbar-100">
              <Bolt size={20} />
              <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-all ">
                Settings
              </span>
            </NavLink>
            <NavLink className="group flex items-center transition-all py-2 px-4 gap-3 rounded hover:bg-navbar-100">
              <LogOut size={20} style={{ color: "red" }} />
              <span
                className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-all"
                style={{ color: "red" }}
              >
                Log Out
              </span>
            </NavLink>
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="tablet:hidden fixed h-full w-screen backdrop-blur-sm supports-[backdrop-filter]:bg-black-3/2 z-40 inset-0 overflow-hidden transition-all text-black rounded-[16px]">
          <div className="h-full w-[224px] shadow-sm bg-navbar-white flex flex-col items-center py-4 px-[10px] gap-4 text-black-1 overflow-y-auto">
            <div className="flex flex-col gap-6 items-center w-full grow">
              {/* company */}
              <div className="flex items-center w-[192px] px-5">
                <img src={Logo} alt="company icon" className="mr-1" />

                <div className="flex">
                  <span className="font-medium">OrangeFarm</span>
                </div>
              </div>

              {/* navigation */}
              <Navbar setMobileMenuOpen={setMobileMenuOpen} />
            </div>

            <nav className="w-full">
              <ul className="flex flex-col gap-1">
                <NavLink className="group flex items-center transition-all py-2 px-4 gap-3 rounded hover:bg-navbar-100">
                  <img src={SidebarAvatar} />
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-all ">
                      Gustavo Xavier
                    </span>
                    <div className="bg-navbar-yellow rounded-full w-[46px] px-1">
                      <span className="text-xs opacity-80 text-black">
                        Admin
                      </span>
                    </div>
                  </div>
                </NavLink>
                <NavLink className="group flex items-center transition-all py-2 px-4 gap-3 rounded hover:bg-navbar-100">
                  <Bolt size={20} />
                  <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-all ">
                    Settings
                  </span>
                </NavLink>
                <NavLink className="group flex items-center transition-all py-2 px-4 gap-3 rounded hover:bg-navbar-100">
                  <LogOut size={20} style={{ color: "red" }} />
                  <span
                    className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-all"
                    style={{ color: "red" }}
                  >
                    Log Out
                  </span>
                </NavLink>
              </ul>
            </nav>

            <div
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-[20px] left-[240px] bg-black-100 text-black-12 rounded-full p-2 z-50 shadow-sm"
            >
              <MenuCloseIcon width={20} height={20} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
