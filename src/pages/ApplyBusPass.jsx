import React from "react";

// The RefreshIcon SVG component is no longer needed and has been removed.

export const ApplyBusPass = () => {
  return (
    // The main container that will be rendered in the Outlet
    // The background color (like light blue) would be on the <main> tag in Layout.jsx
    <div className="bg-[#e0f5f7] px-4">
      <div className="w-full max-w-6xl mx-auto bg-white border border-gray-200 rounded-md shadow-md p-6 md:p-8">
        <header className="mb-8">
          <h1 className="border-b-2 border-[#007B85] pb-2 text-center text-xl font-semibold text-[#007B85]">
            Apply Bus Pass
          </h1>
        </header>

        <section className="mb-8 text-sm">
          <p className="font-bold text-red-600">Instruction :</p>
          <p className="text-gray-700">All (*) marked are mandatory</p>
          <p className="text-red-600">
            If you are existing user. Please check your prefilled data.
          </p>
        </section>

        <form>
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Existing User Radio */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Are you existing Bus Pass User :{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name="existingUser"
                      value="yes"
                      className="form-radio h-4 w-4 text-cyan-600"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name="existingUser"
                      value="no"
                      className="form-radio h-4 w-4 text-cyan-600"
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Pass Type Radio */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Which type of pass do you want{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name="passType"
                      value="ebus"
                      className="form-radio h-4 w-4 text-cyan-600"
                    />
                    e-Bus Pass
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name="passType"
                      value="conventional"
                      className="form-radio h-4 w-4 text-cyan-600"
                    />
                    Conventional(Printed) Bus Pass
                  </label>
                </div>
              </div>

              {/* Captcha */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Captcha
                </label>
                <div className="flex items-center gap-4">
                  {/* In a real app, this src would be dynamic */}
                  <img
                    src="https://placehold.co/100x40/eee/000?text=Qi9t1b&font=monospace"
                    alt="Captcha code"
                  />
                  {/* The SVG has been replaced with this image tag */}
                  <img
                    src="https://dtcpass.delhi.gov.in/images/refresh.png"
                    alt="Refresh Captcha"
                    className="h-6 w-6 cursor-pointer"
                  />
                  <input
                    type="text"
                    placeholder="Type Here"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Old Bus Pass Number */}
              <div>
                <label
                  htmlFor="oldPassNumber"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Old Bus Pass Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="oldPassNumber"
                  placeholder="Enter Old Bus Pass Number"
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                />
              </div>

              {/* Category of Bus Pass */}
              <div>
                <label
                  htmlFor="busCategory"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Select Category of Bus Pass{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="busCategory"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                >
                  <option>Select Bus Pass Type</option>
                  <option>Student Pass</option>
                  <option>General All Route Pass</option>
                  <option>Senior Citizen Pass</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-12 flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-[#E84D59] px-24 py-1 text-md font-semibold text-white shadow-sm transition-colors hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <a href="http://localhost:8080/dtc/new">SUBMIT</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyBusPass;