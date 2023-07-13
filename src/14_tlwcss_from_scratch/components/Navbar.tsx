import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

export const Navbar = () => {
  return (
    // Creating a Navbar.
    <div className="container relative mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="" className="pt-2 hover:cursor-pointer" />
        </Link>
        {/* Menu items */}
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
        {/* Get Started Button */}
        <Link
          to="/"
          className="hidden rounded-full bg-brightRed px-3 py-2 text-white hover:bg-brightRedLight md:block"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};
