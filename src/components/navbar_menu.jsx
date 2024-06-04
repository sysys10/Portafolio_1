import { FaBars } from "react-icons/fa";
import GetScrollY from "../hooks/getScrollY";
import { useRef, React } from "react";
import { RxCross2 } from "react-icons/rx";
function Nav() {
  const getScrollY = GetScrollY();
  const currentRef = useRef(null);
  const navItems =
    "flex items-center justify-center w-[25%] text-center hover:w-[30%] hover:bg-[crimson] hover:duration-300";
  return (
    <header className="flex flex-row">
      <div
        className={`h-16 flex justify-around text-lg font-bold w-full fixed z-50  ${
          getScrollY > 80 ? "text-black bg-white " : "text-gray-200"
        }`}
      >
        <div className="mt-4">
          <a
            href="/"
            className="whitespace-nowrap text-nowrap text-2xl flex-grow"
          >
            SYS's Portafolio
          </a>
        </div>
        <div className="flex flex-row gap-6 opacity-0 lg:opacity-100 w-[25%]">
          <a className={navItems}>
            <a href="#">Home</a>
          </a>
          <a className={navItems}>
            <a href="#About">About</a>
          </a>
          <a className={navItems}>
            <a href="#project">Mywork</a>
          </a>
          <a className={navItems}>
            <a href="mailto:yunsu102896@gmail.com"> Contact</a>
          </a>
        </div>
        <menu className="absolute md:right-24 right-10 top-5">
          <button
            onClick={() => {
              currentRef.current.classList.add("slide");
            }}
          >
            <FaBars className="text-3xl"></FaBars>
          </button>
        </menu>
        <div
          ref={currentRef}
          className="w-screen md:w-[400px] flex-shrink-0 h-screen -right-[100vw] md:-right-[400px] absolute bg-gray-100 flex flex-col items-center"
        >
          <button
            onClick={() => {
              currentRef.current.classList.remove("slide");
            }}
            className="absolute md:right-24 right-10 top-4"
          >
            <RxCross2 className="text-4xl text-gray-700"></RxCross2>
          </button>
          <div className="text-gray-700 text-5xl flex flex-col gap-10 mt-16 mr-[30%]">
            <a
              href="#"
              onClick={() => {
                currentRef.current.classList.remove("slide");
              }}
            >
              Home
            </a>
            <a
              href="#About"
              onClick={() => {
                currentRef.current.classList.remove("slide");
              }}
            >
              About
            </a>
            <a
              href="#project"
              onClick={() => {
                currentRef.current.classList.remove("slide");
              }}
            >
              Mywork
            </a>
            <a href="mailto:yunsu102896@gmail.com"> Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
