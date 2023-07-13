import Anisha from "../img/avatar-anisha.png";
import Ali from "../img/avatar-ali.png";
import Richard from "../img/avatar-richard.png";
import { Link } from "react-router-dom";
export const Testimony = () => {
  return (
    <div>
      <div className="container mx-auto mb-10 mt-10 flex flex-col items-center space-y-12">
        {/* Heading */}
        <h4 className="text-center text-4xl font-bold">
          What's different about Manage?
        </h4>
        {/* Testimony lists */}
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-12 md:space-y-0">
          <div className="flex flex-col items-center rounded-lg bg-veryLightGray p-6 md:w-1/3">
            {/* First Testimony */}
            <img className="-mt-14 w-16" src={Anisha} alt="" />
            <h5 className="text-xl font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Manage has superchaged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-veryLightGray p-6 md:w-1/3">
            {/* Second Testimony */}
            <img className="-mt-14 w-16" src={Ali} alt="" />
            <h5 className="text-xl font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Manage has superchaged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-veryLightGray p-6 md:w-1/3">
            {/* Third Testimony */}
            <img className="-mt-14 w-16" src={Richard} alt="" />
            <h5 className="text-xl font-bold">Richard Watts</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Manage has superchaged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>
        </div>
        <Link
          to="/"
          className="rounded-full bg-brightRed p-3 px-6 pt-2 text-white hover:cursor-pointer hover:bg-brightRedLight"
        >
          {/* Button */}
          Get Started
        </Link>
      </div>
    </div>
  );
};
