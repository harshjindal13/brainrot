import React from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

// Helper function to format the date string
const formatDateToDDMMYYYY = (dateString) => {
  if (!dateString) return ''; // Handle case where date is not available

  const date = new Date(dateString);
  
  // Get day, month, and year
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const Mobhero = ({ url, name, passNumber, fromDate, toDate, qrurl }) => {
  return (
    <div className="bg-[#e0f5f7] py-2">
        <div className="m-4 mt-3 mb-14 bg-[url(/assets/dtc-watermark.jpg)] shadow-sm">
        <h1 className="border-b-2 border-neutral-200 py-3 text-center text-2xl font-bold text-[#01a2a6] underline underline-offset-2">
          DTC And Cluster Bus Pass
        </h1>

        <img
          src={url}
          className="m-auto flex h-[250px] w-[250px] items-center justify-center object-cover pt-4 opacity-60"
        />

        <h2 className="text-center text-2xl font-bold text-neutral-700">
          
          {name}
        </h2>
        <p className="py-4 text-center text-2xl font-bold tracking-tighter text-neutral-700">
          Student All route AC/Non AC
        </p>

        <p className="mx-auto pb-2 text-center text-2xl font-bold">
          Bus Pass No.
        </p>
        <p
          className="mx-auto animate-pulse pb-2 text-center text-2xl font-bold text-[#2f8a12]"
          style={{ animationDuration: "1750ms" }}
        >
          {passNumber}
        </p>

        <p className="px-3 pb-1.5 text-center text-xl font-bold tracking-wide text-red-500">
          Valid from {formatDateToDDMMYYYY(fromDate)} to {formatDateToDDMMYYYY(toDate)}
        </p>

        <div className="mb-4 flex justify-between border-t-2 border-neutral-200 px-2 pb-2">
          <img src="/assets/signature.png" className="h-20 w-20" />
          <div className="h-20 self-center border-l-2 border-neutral-200"></div>

          <img src={qrurl} alt="" className="mt-2 mr-8 h-18 w-18" />
        </div>
      </div>
    </div>
  );
};

export { Mobhero };
export default Mobhero;
