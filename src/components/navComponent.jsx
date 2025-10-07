import React from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../config"; // Assuming you still need this for some links

// Navigation links with proper routing configuration
const links = [
  {
    href: "/",
    title: "HOME",
    isExternal: false
  },
  {
    href: "/apply",
    title: "APPLY FOR BUS PASS",
    isExternal: true
  },
  {
    href: "/faqs",
    title: "FAQs",
    isExternal: false
  },
  {
    href: "/login",
    title: "LOGIN",
    isExternal: false
  },
  {
    href: "/pricecalculator",
    title: "PRICE CALCULATOR",
    isExternal: false
  },
  {
    href: "/dashboard",
    title: "RE-GENERATE E-PASS",
    isExternal: false
  },
  {
    href: "/status",
    title: "APPLICATION STATUS",
    isExternal: false
  },
  {
    href: "/download",
    title: "DOWNLOAD",
    isExternal: false
  },
  {
    href: "/contact",
    title: "CONTACT US",
    isExternal: false
  }
];

// 2. This is your Nav component that uses the links data.
const Nav = () => {
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
          src="/assets/dtc-logo.png"
          alt="DTC Logo"
          height={126.99}
          width={126.99}
        />

        <div className="sticky top-5 z-50 w-full p-3 text-center text-3xl font-bold tracking-tight text-[#99d0d7]">
          Delhi Transport Corporation
        </div>
        <div className="">
          {/* 
                  To make the nav content sticky while scrolling, 
                  wrap the nav in a div with 'sticky top-0 z-50' and ensure its parent doesn't have overflow:hidden/auto.
                */}
          <div className="sticky top-0 z-50 w-full bg-[#07234b]">
            <nav>
              <div className="flex items-center justify-center gap-6 px-4 py-1 font-mono text-sm tracking-tight text-[#43b914] flex-wrap">
                {links.map((link) => {
                  const isExternal = link.isExternal;
                  const Component = isExternal ? "a" : Link;

                  const props = {
                    key: link.title,
                    className: link.title === "HOME" ? "text-pink-400 hover:text-pink-400 transition-colors duration-200 px-2 py-1" : "hover:text-pink-400 transition-colors duration-200 px-2 py-1",
                    ...(isExternal
                      ? {
                          href: `${BACKEND_URL}${link.href}`,
                          // target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : { to: link.href }),
                  };

                  return <Component {...props}>{link.title}</Component>;
                })}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export { Nav };
export default Nav;
