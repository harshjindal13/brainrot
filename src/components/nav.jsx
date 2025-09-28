import React from "react";

export const Nav = () => {
  return (
    <>
      <div className="flex justify-between bg-[#01a2a6] p-3 text-white">
        <div>
          <span className="p-2">
            <b className="text-12px">011-23752769 - 75 Ext.226.</b>
          </span>
          <span className="p-2"> bus-pass@dtc.nic.in</span>
        </div>
        <div>
          <b className="text-12px">Departmental Login</b>
        </div>
      </div>

      <div className="h-8px flex flex-col items-center justify-center bg-[#07234b] pt-5">
        <img
          src="../../assets/dtc-logo.png"
          alt=""
          height={126.99}
          width={126.99}
        />

        <div className="sticky top-5 z-50 w-full p-4 text-center text-3xl font-bold tracking-tight text-[#99d0d7]">
          Delhi Transport Corporation
        </div>
        <div className="">
          {/* 
            To make the nav content sticky while scrolling, 
            wrap the nav in a div with 'sticky top-0 z-50' and ensure its parent doesn't have overflow:hidden/auto.
          */}
          <div className="sticky top-0 z-50 w-full bg-[#07234b]">
            <nav>
              <ul className="text-2px flex flex-row items-center justify-evenly gap-4 py-1 font-semibold">
                <li>
                  <a
                    href="#"
                    className="border-b-2 border-pink-400 px-1 pb-1 text-pink-400"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#" className="px-2 text-green-400 hover:underline">
                    APPLY FOR BUS PASS
                  </a>
                </li>
                <li>
                  <a href="#" className="px-2 text-green-400 hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="#"
                    className="flex items-center px-2 text-green-400 hover:underline"
                  >
                    LOGIN <span className="ml-1">&#9662;</span>
                  </a>
                  {/* Example dropdown, can be expanded */}
                  {/* <ul className="absolute left-0 mt-1 hidden group-hover:block bg-[#07234b] text-white rounded shadow-lg">
                  <li><a href="#" className="block px-4 py-2 hover:bg-[#01a2a6]">User Login</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-[#01a2a6]">Admin Login</a></li>
                </ul> */}
                </li>
                <li>
                  <a href="#" className="px-2 text-green-400 hover:underline">
                    PRICE CALCULATOR
                  </a>
                </li>
                <li>
                  <a href="#" className="px-2 text-green-400 hover:underline">
                    RE-GENERATE E-PASS
                  </a>
                </li>
                <li>
                  <a href="#" className="px-2 text-green-400 hover:underline">
                    APPLICATION STATUS
                  </a>
                </li>
                <li>
                  <a href="#" className="px-2 text-green-400 hover:underline">
                    DOWNLOAD
                  </a>
                </li>
                <li>
                  <a href="#" className="px-1 text-green-400 hover:underline">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center bg-[#e0f5f7]">
        <div className="w-full max-w-5xl rounded-md bg-white p-8 shadow-md">
          <div className="mb-6 flex flex-col items-center">
            <a
              href="#"
              className="mb-2 text-sm font-medium text-[#01a2a6] underline"
            >
              Get Your e-BusPass
            </a>
          </div>
          <form className="mx-auto flex w-full flex-col items-center justify-center gap-4">
            <div className="flex w-full max-w-4xl flex-col items-center">
              <label
                className="mb-1 block text-xs font-semibold text-gray-700"
                htmlFor="buspass-number"
              >
                eBusPass Number*
              </label>
              <input
                id="buspass-number"
                type="text"
                value="TSS00023456"
                readOnly
                className="w-full max-w-sm rounded border border-[#b1b1b1] bg-[#e8e3e3] px-3 py-2 text-gray-700"
              />
            </div>
            <div className="flex w-full flex-col items-center">
              <label
                className="mb-1 block text-xs font-semibold text-gray-700"
                htmlFor="mobile-number"
              >
                Use Mobile Number*
              </label>
              <input
                id="mobile-number"
                type="text"
                placeholder="User Mobile Number"
                className="w-full max-w-sm rounded border border-[#b1b1b1] px-3 py-2 placeholder:text-black"
              />
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="flex">
                <label className="mb-1 flex items-center justify-evenly text-xs font-semibold text-gray-700">
                  Captcha
                </label>
                <div className="mb-2 flex items-center gap-3">
                  <span className="rounded bg-gray-100 px-4 py-2 font-mono text-lg tracking-widest select-none">
                    aLucjm
                  </span>
                  <button
                    type="button"
                    className="focus:outline-none"
                    tabIndex={-1}
                    aria-label="Refresh Captcha"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582M20 20v-5h-.581M5.5 19A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8a7.963 7.963 0 017.5 7M19 5l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <span className="mb-1 block text-center text-xs text-gray-500">
                Type the captcha here
              </span>
              <input
                type="text"
                placeholder="Type Captcha"
                className="w-full max-w-sm rounded border border-[#b1b1b1] px-3 py-2 placeholder:text-black"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full max-w-[250px] rounded bg-[#f36371] py-1 font-bold text-white transition duration-250 hover:bg-[#01a2a6]"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
