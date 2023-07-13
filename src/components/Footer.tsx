import { Link } from "react-router-dom";
import Logo from "../img/logo-white.svg";
import Instagram from "../img/icon-instagram.svg";
import Facebook from "../img/icon-facebook.svg";
import Pinterest from "../img/icon-pinterest.svg";
import Youtube from "../img/icon-youtube.svg";
import Twitter from "../img/icon-twitter.svg";

export const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between md:flex-row">
        <span className="pb-4 text-white md:hidden">
          Copyright &copy; 2023, All Rights Reserved
        </span>
        {/* Logo and Social media icons. */}
        <div className="flex flex-col-reverse space-y-6 space-y-reverse px-4 py-12 md:flex-col md:space-y-6">
          {/* Logo. */}
          <Link to="/">
            <img src={Logo} alt="" className="h-8 hover:cursor-pointer" />
          </Link>
          {/* Social Media. */}
          <div className="flex flex-row items-center justify-between space-x-4">
            <Link to="">
              <img src={Facebook} alt="" className="h-8" />
            </Link>
            <Link to="/">
              <img src={Youtube} alt="" className="h-8" />
            </Link>
            <Link to="/">
              <img src={Twitter} alt="" className="h-8" />
            </Link>
            <Link to="/">
              <img src={Pinterest} alt="" className="h-8" />
            </Link>
            <Link to="/">
              <img src={Instagram} alt="" className="h-8" />
            </Link>
          </div>
        </div>
        {/* Lists of List of Pages. */}
        <div className="flex flex-row space-x-16">
          {/* First List of Pages. */}
          <div className="flex flex-col items-center space-y-2">
            <Link to="/" className="text-gray-300 hover:text-brightRed">
              Home
            </Link>
            <Link to="/" className="text-gray-300 hover:text-brightRed">
              Pricing
            </Link>
            <Link to="/" className="text-gray-300 hover:text-brightRed">
              Products
            </Link>
            <Link to="/" className="text-gray-300 hover:text-brightRed">
              About
            </Link>
          </div>
          {/* Second List of Pages. */}
          <div className="flex flex-col items-center space-y-2">
            <Link to="/" className="text-gray-300 hover:text-brightRed">
              Careers
            </Link>
            <Link to="/" className="text-gray-300 hover:text-brightRed">
              Community
            </Link>
            <Link to="/" className="text-gray-300 hover:text-brightRed">
              Privacy Policy
            </Link>
          </div>
        </div>
        {/* Input, Copyright and Button Go. */}
        <div className="flex flex-col items-center space-y-6">
          {/* Input and Button Go. */}
          <div className="flex flex-row space-x-6 py-4">
            <input
              className="rounded-full px-2"
              placeholder="Updated in your inbox"
            />
            <Link
              to="/"
              className="rounded-full bg-brightRed px-6 py-2 text-white hover:bg-brightRedLight "
            >
              Go
            </Link>
          </div>
          {/* Copyright */}
          <span className="hidden text-white md:block">
            Copyright &copy; 2023, All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};
