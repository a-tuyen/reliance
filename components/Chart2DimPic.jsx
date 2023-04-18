import React from "react";
import Image from "next/image";

const Chart2DimPic = ({
  img,
  znCode,
  znLb,
  znKg,
  alCode,
  alLb,
  alKg,
  diaIn,
  diaMm,
  widIn,
  widMm,
  width,
  height

}) => {
  return (
    <>
      <tr>
        <th colSpan={2}>ITEM #</th>
        <th className="border-r-0 ">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div>lb</div>
            <div className="px-2">(kg)</div>
          </div>
        </th>
        <th>A: LENGTH</th>
        <th>B: WIDTH</th>
      </tr>
      <tr>
        <td className="bg-zinc text-white border-l-0 px-1">ZN</td>
        <td className="bg-zincLight">{znCode}</td>
        <td className="bg-zincLight border-r-0">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div>{znLb}</div>
            <div className="px-2">{znKg}</div>
          </div>
        </td>
        <td className="border-b-0 align-bottom lg:align-middle pb-2 lg:pb-0">{diaIn}</td>
        <td className="border-b-0 align-bottom lg:align-middle pb-2 lg:pb-0">{widIn}</td>
      </tr>

      <tr>
        <td className="bg-alum text-white border-l-0">AL</td>
        <td className="bg-alumLight">{alCode}</td>
        <td className="bg-alumLight border-r-0">
          {alLb} {alKg}
        </td>
        <td className="border-t-0 align-top lg:align-middle pt-2 lg:pt-0">{diaMm}</td>
        <td className="border-t-0 align-top lg:align-middle pt-2 lg:pt-0">{widMm}</td>     
      </tr>
      <tr>
        <td colSpan={8} className="bg-white">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={img}
              alt="picture of anode"
              className="min-w-[80px] py-4"
              width={width}
              height={height}
            />
          </div>
        </td>
      </tr>
      <tr></tr>
    </>
  );
};

export default Chart2DimPic;
