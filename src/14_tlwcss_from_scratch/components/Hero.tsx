import { Link } from "react-router-dom";
import illustration_intro from "../img/illustration-intro.svg";

export const Hero = (): JSX.Element => {
  return (
    <div className="container mx-auto mt-10 flex flex-col-reverse items-center justify-center px-6 md:flex-row">
      {/* Left Item */}
      <div className="mx-auto mb-32 flex w-1/2 flex-col space-y-12">
        <h1 className="max-w-md text-center text-4xl font-bold md:text-left md:text-5xl">
          Bring everyone together to build better products
        </h1>
        <p className="max-w-md text-center text-darkGrayishBlue md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="flex justify-center md:justify-start">
          {/* Get Started Button */}
          <Link
            to="/"
            className="rounded-full bg-brightRed px-3 py-2 text-white hover:bg-brightRedLight md:block"
          >
            Get Started
          </Link>
        </div>
      </div>
      {/* Right Item */}
      <div className="md:w-1/2">
        <img src={illustration_intro} alt="" />
      </div>
    </div>
  );
};
