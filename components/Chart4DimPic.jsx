import React from "react";
import Image from "next/image";

const Chart4DimPic = ({
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
  cDiaIn,
  cDiaMm,
  dMeasureIn,
  dMeasureMm,
  notes,
}) => {
  return (
    <>
      <tr>
         <td className="bg-zinc text-white border-l-0">ZN</td>
        <td className="bg-zincLight">{znCode}</td>
        <td className="bg-zincLight border-r-0">{znLb}</td>
        <td className="bg-zincLight border-l-0">{znKg}</td>
        <td className="border-b-0">{diaIn}</td>

        <td className="border-b-0">{widIn}</td>

        <td className="border-b-0">{cDiaIn}</td>

        <td className="border-b-0">{dMeasureIn}</td>
      </tr>

      <tr>
        <td className="bg-alum text-white border-l-0">AL</td>
        <td className="bg-alumLight">{alCode}</td>
        <td className="bg-alumLight border-r-0">{alLb}</td>
        <td className="bg-alumLight border-l-0">{alKg}</td>
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
              className="min-w-[80px]"
              width={100}
              height={100}
            />
            {notes}
          </div>
        </td>
      </tr>
      <tr>

      </tr>
    </>
  );
};

export default Chart4DimPic;

