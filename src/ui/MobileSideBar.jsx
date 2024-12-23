"use client";

import useOutsideClick from "@/hooks/useOutSideClick";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { createPortal } from "react-dom";

function MobileSideBar({ open, setOpen, children }) {
  const ref = useOutsideClick(() => {
    if (open) setOpen(false);
  });
  const backdropRef = useRef();

  const closeMenuHandler = (e) => {
    const element = e.target;
    const isLink =
      element.tagName === "A" ||
      element.parentElement?.tagName === "A" ||
      element.parentElement?.parentElement?.tagName === "A";

    if (isLink) setOpen(false);
  };

  return createPortal(
    <div
      ref={backdropRef}
      className={`fixed inset-0 z-50 bg-secondary-800 bg-opacity-30 transition-all duration-300 ease-in-out ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        ref={ref}
        className={`fixed top-0 right-0 w-2/3 h-screen bg-secondary-0 p-4 shadow-lg rounded-lg transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="flex items-center justify-between border-b 
          border-b-secondary-300 pb-2 mb-6"
        >
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="w-5 h-5 text-secondary-500" />
          </button>
        </div>
        <div onClick={closeMenuHandler}>{children}</div>
      </div>
    </div>,
    document.body
  );
}


export default MobileSideBar;
