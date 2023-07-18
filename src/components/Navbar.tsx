import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { useState } from "react";

interface IHamburger {
  showMenu: boolean;
  topMenu: string;
  middleMenu: string;
  bottomMenu: string;
}

export const Navbar = () => {
  // Initializing Hamburger Menu

  const initialHamburgerState: IHamburger = {
    showMenu: false,
    middleMenu: "",
    topMenu: "",
    bottomMenu: "translate-y-3",
  };

  const [hamburgerState, setHamburgerState] = useState<IHamburger>(
    initialHamburgerState
  );

  // Handling Menu CSS.

  const handleHamburgerMenu = () => {
    const newHamburgerState: IHamburger = {
      showMenu: !hamburgerState.showMenu,
      topMenu: "hidden",
      middleMenu: "rotate-45 transition-all duration-300",
      bottomMenu: "-rotate-45 transition-all duration-300 translate-y-1.5",
    };
    setHamburgerState(
      !hamburgerState.showMenu ? newHamburgerState : initialHamburgerState
    );
  };

  return (
    // Creating a Navbar.
    <div className="container relative mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Logo. */}
        <Link to="/">
          <img src={Logo} alt="" className="pt-2 hover:cursor-pointer" />
        </Link>
        {/* Menu items. */}
        <div className="hidden space-x-6 md:flex">
          <Link to="/" className="hover:text-darkGrayishBlue">
            Pricing
          </Link>
          <Link to="/" className="hover:text-darkGrayishBlue">
            Product
          </Link>
          <Link to="/" className="hover:text-darkGrayishBlue">
            About Us
          </Link>
          <Link to="/" className="hover:text-darkGrayishBlue">
            Careers
          </Link>
          <Link to="/" className="hover:text-darkGrayishBlue">
            Community
          </Link>
        </div>
        {/* Get Started Button. */}
        <Link
          to="/"
          className="hidden rounded-full bg-brightRed px-3 py-2 text-white hover:bg-brightRedLight md:block"
        >
          Get Started
        </Link>
        {/* Hamburger Menu Icon. */}
        <button className="hamburger" onClick={handleHamburgerMenu}>
          <span className={`hamburger-top ${hamburgerState.topMenu}`}></span>
          <span
            className={`hamburger-middle translate-y-1.5 ${hamburgerState.middleMenu}`}
          ></span>
          <span
            className={`hamburger-bottom ${hamburgerState.bottomMenu}`}
          ></span>
        </button>
        {/* Mobile Menu. */}
        <div className="md:hidden">
          <div
            className={`absolute left-6 right-6 mt-10 flex-col items-center space-y-4 self-end bg-white py-4 font-bold drop-shadow-md sm:w-auto sm:self-center ${
              hamburgerState.showMenu ? "flex" : "hidden"
            }`}
          >
            <Link to="/">Pricing</Link>
            <Link to="/">Product</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Community</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
