import React from "react";
import Image from "next/image";

const Chart1pt2DimNote = ({
  img,
  znCode,
  znLb,
  znKg,
  diaIn,
  diaMm,
  widIn,
  widMm,
  notes,
}) => {
  return (
    <>
      <tr>
        <td className="bg-zinc text-white border-l-0 px-1">ZN</td>
        <td className="bg-zincLight">{znCode}</td>
        <td className="bg-zincLight border-r-0">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div>{znLb}</div>
            <div className="px-2">{znKg}</div>
          </div>
        </td>
        <td className="border-b-0 pb-2 lg:pb-0">
          <div className="flex flex-col">
            <p>{diaIn}</p>
            <p>{diaMm}</p>
          </div>
        </td>
        <td className="border-b-0 pb-2 lg:pb-0">
          <div className="flex flex-col">
            <p>{widIn}</p>
            <p>{widMm}</p>
          </div>
        </td>
        <td>{notes}</td>
      </tr>
    </>
  );
};

export default Chart1pt2DimNote;
