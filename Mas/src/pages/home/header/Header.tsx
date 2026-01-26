import { useLocation } from "react-router-dom";
import type React from "react";
import LogOutPopover from "./LogOutPopover";

type HeaderProps = {
  children?: React.ReactNode;
};
export default function Header({ children }: HeaderProps) {
  const location = useLocation();

  if (location.pathname === "/") return null;
  return (
    <>
      <header className="fixed w-full z-20 top-0 start-0 bg-sky-700 shadow-md">
        <nav className="bg-neutral-primary">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w- p-2">
            <div className="flex items-center gap-1">
              <span className="text-xs text-white ">SYSTEM</span>
              <LogOutPopover />
            </div>
            <div className="flex flex-row">
              <span className="flex justify-end items-center self-center text-sm text-white font-semibold whitespace-nowrap">
                {/* <span className="text-xs text-yellow-300 ml-2">(v3.9.5)</span>{" "} */}
                شركة مياه الشرب و الصرف الصحي بالبحر الأحمر
              </span>
              {children}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
