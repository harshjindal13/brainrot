import React from "react";

export const Mobhero = ({ url, name, passno, fromDate, toDate, qrurl }) => {
  return (
    <div className="bg-[#e0f5f7] py-2">
      <div className="m-4 mt-3 mb-14 bg-[url(../../assets/dtc-watermark.jpg)] shadow-sm">
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
          {passno}
        </p>

        <p className="px-3 pb-1.5 text-center text-xl font-bold tracking-wide text-red-500">
          Valid from {fromDate} to {toDate}
        </p>

        <div className="mb-4 flex justify-between border-t-2 border-neutral-200 px-2 pb-2">
          <img src="../../assets/signature.png" className="h-20 w-20" />
          <div className="h-20 self-center border-l-2 border-neutral-200"></div>

          <img src={qrurl} alt="" className="mt-2 mr-8 h-18 w-18" />
        </div>
      </div>
    </div>
  );
};
