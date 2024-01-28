import { NavLink } from "react-router-dom";
import { SearchIcon } from "../assets/icons";
import {
  LayoutDashboard,
  UsersRound,
  FileBarChart,
  Globe,
  MessageCircle,
  HeartHandshake,
  DatabaseZap,
} from "lucide-react";
import React from "react";

export default function Navbar({ setMobileMenuOpen }) {
  const navItems = [
    {
      to: "/dashboard",
      icon: <LayoutDashboard size={10} />,
      label: "Dashboard",
    },
    { to: "/customers", icon: <UsersRound size={10} />, label: "Customers" },
    { to: "/Reports", icon: <FileBarChart size={10} />, label: "All Reports" },
    { to: "/Geography", icon: <Globe size={10} />, label: "Geography" },
    {
      to: "/conversation",
      icon: <MessageCircle size={10} />,
      label: "Conversations",
    },
    { to: "/deals", icon: <HeartHandshake size={10} />, label: "Deals" },
    { to: "/exports", icon: <DatabaseZap size={10} />, label: "Export" },
  ];

  return (
    <nav className="w-full">
      <div className="relative text-black-60 px-4 pb-4">
        <div className="pointer-events-none flex items-center pl-4 absolute left-3 top-3">
          <SearchIcon width={14} height={14} />
        </div>
        <input
          type="text"
          className="block  text-sm bg-black-100 py-2 w-full px-4 pl-[38px] border border-black-85 outline-none rounded-full"
          placeholder="Search"
        />
      </div>
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            {...item}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        ))}
      </ul>
    </nav>
  );
}

function NavItem({ to, icon, label, setMobileMenuOpen }) {
  return (
    <li
      className="main-nav__link"
      onClick={
        typeof setMobileMenuOpen === "function"
          ? () => setMobileMenuOpen(false)
          : null
      }
    >
      <NavLink
        to={to}
        className="group flex items-center transition-all py-2 px-4 gap-3 rounded hover:bg-navbar-100"
      >
        {icon}
        <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-all">
          {label}
        </span>
      </NavLink>
    </li>
  );
}
