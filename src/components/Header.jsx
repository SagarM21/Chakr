import { Link, useLocation } from "react-router-dom";
import { MenuOpenIcon } from "../assets/icons";
import { useEffect, useState } from "react";

export default function Header({ setMobileMenuOpen }) {
  const [pageName, setPageName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname.split("/");
    setPageName(pagePath[1] || "Home");
  }, [location.pathname]);

  return (
    <header className="w-full grid grid-cols-[1fr_auto] tablet:grid-cols-[1fr_minmax(400px,_1fr)_1fr] items-center tablet:px-8 gap-4  bg-black-100">
      <div className="flex items-center gap-2 tablet:gap-4">
        <div
          className="block tablet:hidden text-black-12"
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuOpenIcon width={24} height={24} />
        </div>
        {/* <span className="text-black-12 text-xl font-medium capitalize">
          {pageName}
        </span> */}
      </div>
    </header>
  );
}
