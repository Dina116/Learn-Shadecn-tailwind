import LogOutCard from "../LogOutCard";
import Menu from "./Menu";
import { useNavbar } from "./useNavbar";

export default function Navbar() {
  const { isDropdownOpen, setDropdownOpen, dropdownRef } = useNavbar();
  return (
    <header className="fixed w-full z-20 top-0 start-0 bg-blue-900 shadow-md">
      <nav className="bg-neutral-primary">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w- p-2">
          <div className="flex justify-start items-center  gap-1">
            <span className="text-xs text-white ">SYSTEM</span>
            <div
              className=" relative w-6 h-6 rounded-full flex items-center justify-center text-white "
              ref={dropdownRef}
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="absolute left-0 w-30 z-3 mt-30">
                <LogOutCard />
              </div>
            )}
          </div>
          <div className="flex flex-row">
            <span className="flex justify-end items-center self-center text-sm text-white font-semibold whitespace-nowrap">
              <span className="text-xs text-yellow-300 ml-2">(v3.9.5)</span>{" "}
              المنظومة الموحدة لإدارة صلاحيات المستخدمين
            </span>
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
}
