"use client";

import Link from "next/link";
import DefineTheme from "../DefineTheme";
// import { useEffect, useState } from "react";
import NavButtons, { navItems } from "./NavButtons";
import { Menu } from "lucide-react";

const Navbar = () => {
  // const [show, setShow] = useState<boolean>(true);
  // const [lastScrollY, setLastScrollY] = useState<number>(0);

  /*
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window === "undefined") return;
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setShow(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) setShow(false);
      else setShow(true);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  */

  // ${show ? "translate-y-0" : "-translate-y-full"}

  return (
    <nav
      className={`flex items-center justify-between flex-wrap gap-3 fixed top-0 left-0 w-full py-3 px-4 sm:px-6 md:px-8 transition-transform duration-300 z-50 bg-base-300/80 backdrop-blur-md  `}
    >
      {/* left side */}
      <div>
        <Link href="/">
          <img className="max-w-40" src="/logo.png" alt="" />
        </Link>
      </div>

      {/* right side */}
      <div className="hidden md:flex items-center gap-x-2">
        {navItems.map((item) => (
          <Link key={item.alt} href={item.href} className={`font-bangla`}>
            {item.label}
          </Link>
        ))}

        <NavButtons />
        <DefineTheme />
      </div>

      {/* mobile nav */}
      <div className=" md:hidden flex items-center gap-x-3">
        <DefineTheme />
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="cursor-pointer">
              <Menu size={24} />
            </label>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              className="drawer-overlay"
              aria-label="close sidebar"
            />

            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content relative flex flex-col gap-y-2.5">
              <label
                htmlFor="my-drawer-4"
                className="absolute top-2 right-2 text-xl font-bold cursor-pointer"
              >
                ✕
              </label>
              <label
                htmlFor="my-drawer-4"
                className="py-4 border-b border-gray-300 dark:border-gray-600"
              >
                <Link href="/">
                  <img className="max-w-40" src="/logo.png" alt="" />
                </Link>
              </label>

              {/* Sidebar content */}
              {navItems.map((item) => (
                <Link key={item.alt} href={item.href} className={`font-bangla`}>
                  {item.label}
                </Link>
              ))}

              <NavButtons />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
