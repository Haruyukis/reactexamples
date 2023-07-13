import { Link } from "react-router-dom";

export const Cta = () => {
  return (
    <div className="bg-brightRed py-6">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-12 md:flex-row md:justify-between md:space-y-0">
        {/* Title */}
        <div>
          <h2 className="max-w-md px-16 text-4xl font-bold text-white md:px-0">
            Simplify how your team works today.
          </h2>
        </div>
        {/* Button */}
        <Link
          to="/"
          className="rounded-full bg-white p-3 px-3 py-2 text-brightRed shadow-md hover:bg-gray-200"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};
