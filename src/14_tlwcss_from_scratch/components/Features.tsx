export const Features = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center space-y-12 px-4 md:mt-10 md:flex-row md:space-y-0">
      {/* What's different. */}
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-center text-4xl font-bold md:text-left">
          What's different about Manage?
        </h2>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our softwarer is tailor-made for modern digital product
          teams.
        </p>
      </div>
      {/* Numbered List. */}
      <div className="flex flex-col space-y-8 md:w-1/2">
        {/* First Item */}
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
          {/* Heading */}
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">
                01
              </div>
              <h3 className="pr-6 text-base font-bold md:mb-4 md:hidden md:pr-0">
                Track company-wide progress
              </h3>
            </div>
          </div>
          <div>
            <h3 className="mb-6 hidden text-lg font-bold md:block">
              Track company-wide progress
            </h3>
            <p className="text-darkGrayishBlue">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
          {/* Heading */}
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">
                02
              </div>
              <h3 className="pr-6 text-base font-bold md:mb-4 md:hidden md:pr-0">
                Advanced build-in reports
              </h3>
            </div>
          </div>
          <div>
            <h3 className="mb-6 hidden text-lg font-bold md:block">
              Advanced build-in reports
            </h3>
            <p className="text-darkGrayishBlue">
              Set internnal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
          {/* Heading */}
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">
                03
              </div>
              <h3 className="pr-6 text-base font-bold md:mb-4 md:hidden md:pr-0">
                Everything you need in one place
              </h3>
            </div>
          </div>
          <div>
            <h3 className="mb-6 hidden text-lg font-bold md:block">
              Everything you need in one place
            </h3>
            <p className="text-darkGrayishBlue">
              Stop jumping from one service to another to communicate,, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
