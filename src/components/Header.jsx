"use client";
import { useAuth } from "@/context/AuthProvider";
import NavLink from "./NavLink";
import useDevice from "@/hooks/useDevice";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileSideBar from "@/ui/MobileSideBar";
import { useState } from "react";

const navLinks = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
];

function Header() {
  const { user, isLoading } = useAuth();
  const { isMobileDevice } = useDevice("(max-width: 1024px)");
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`z-10 shadow-md bg-inherit mb-10 sticky top-0
         transition-all duration-200 border-b border-b-secondary-300 
        ${isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"}
      `}
    >
      <nav className="container xl:max-w-screen-lg">
        <ul className="flex items-center text-secondary-400 justify-between py-2">
          <div className="lg:flex items-center gap-x-10 hidden">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.children}</NavLink>
                </li>
              );
            })}
          </div>
          {isMobileDevice && (
            <MobileSideBar open={open} setOpen={setOpen}>
              <ul>
                {navLinks.map((navLink) => {
                  return (
                    <li key={navLink.id} className="text-xl my-5 px-4">
                      <NavLink
                        path={navLink.path}
                        active="bg-primary-100 text-secondary-700 rounded-lg"
                      >
                        {navLink.children}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </MobileSideBar>
          )}
          <Bars3Icon
            onClick={() => setOpen(true)}
            className="w-7 h-7 text-secondary-700 flex lg:hidden cursor-pointer"
          />
          <li>
            {user ? (
              <NavLink path="/profile">پروفایل</NavLink>
            ) : (
              <NavLink path="/signin">ورود</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
