import React from "react";
import Image from "next/image";

const Chart5DimPic = ({
  img,
  znCode,
  znLb,
  znKg,
  alCode,
  alLb,
  alKg,
  mountingIn,
  mountingMm,
  diaIn,
  diaMm,
  widIn,
  widMm,
  cDiaIn,
  cDiaMm,
  dMeasureIn,
  dMeasureMm,
  notes,
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
        <th>MOUNTING</th>
        <th>A - LENGTH</th>
        <th>B - WIDTH</th>
        <th>C - DEPTH</th>
        <th>D - C/C</th>
      </tr>
      <tr>
        <td className="bg-zinc text-white border-l-0 px-1">ZN</td>
        <td className="bg-zincLight">{znCode}</td>
        <td className="bg-zincLight border-r-0">
          {znLb} {znKg}
        </td>
        <td className="border-b-0">{mountingIn}</td>
        <td className="border-b-0">{diaIn}</td>

        <td className="border-b-0">{widIn}</td>

        <td className="border-b-0">{cDiaIn}</td>

        <td className="border-b-0">{dMeasureIn}</td>
      </tr>

      <tr>
        <td className="bg-alum text-white border-l-0 px-1">AL</td>
        <td className="bg-alumLight">{alCode}</td>
        <td className="bg-alumLight border-r-0">
          {alLb} {alKg}
        </td>
        <td className="border-t-0">{mountingMm}</td>
        <td className="border-t-0">{diaMm}</td>
        <td className="border-t-0">{widMm}</td>
        <td className="border-t-0">{cDiaMm}</td>
        <td className="border-t-0">{dMeasureMm}</td>
      </tr>
      <tr>
        <td colSpan={8} className="border-r-0">
          <div className="flex justify-center">
            <Image
              src={img}
              alt="picture of anode"
              className="min-w-[80px] py-1"
              width={150}
              height={150}
            />
            <div className="flex justify-center items-center">
            {notes}
            </div>
          </div>
        </td>
      </tr>
      <tr></tr>
    </>
  );
};

export default Chart5DimPic;
