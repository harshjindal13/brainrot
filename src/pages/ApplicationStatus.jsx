import React from "react";

export const ApplicationStatus = () => {
  return (
    // This container will be rendered inside your Layout's <Outlet />.
    // The light blue background should be on the <main> tag in your Layout.jsx file.
    <div className="flex items-center justify-center bg-[#d9eeef] py-8">
      <div className="w-full max-w-6xl bg-white p-5 pb-9 shadow-md">
        <header className="mb-8">
          <h1 className="text-center text-xl font-bold text-[#007B85] underline decoration-1 underline-offset-8">
            Track Your Application
          </h1>
        </header>

        <div className="my-8 border-t border-[#007B85]"></div>

        <form className="flex flex-col items-center gap-6">
          <div className="w-full max-w-sm space-y-6">
            <div>
              <label
                htmlFor="application-no"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Enter Application no. <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="application-no"
                placeholder="Enter Your Application no."
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="block rounded-md bg-[#E84D59] px-12 py-2 text-md font-semibold text-white shadow-sm transition-colors hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
        <div className="my-8 grid grid-cols-12">
          <div className="col-span-2"></div>
          <div className="col-span-8 border-t border-[#007B85]"></div>
          <div className="col-span-2"></div>
        </div>

        {/* <div className="border-t border-[#007B85] my-8 w-2xl"></div> */}
      </div>
    </div>
  );
};

export default ApplicationStatus;
