import React from "react";

const Chart3Dim = ({
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
        <td className="border-b-0">{diaIn}</td>
        <td className="border-b-0">{widIn}</td>
        <td className="border-b-0">{cDiaIn}</td>
      </tr>

      <tr>
        <td className="bg-alum text-white border-l-0 border-b-4">AL</td>
        <td className="bg-alumLight border-b-4">{alCode}</td>
        <td className="bg-alumLight border-r-0 border-b-4">
          {alLb} {alKg}
        </td>
        <td className="border-t-0 border-b-4">{diaMm}</td>
        <td className="border-t-0 border-b-4">{widMm}</td>
        <td className="border-t-0 border-b-4">{cDiaMm}</td>
      </tr>
    </>
  );
};

export default Chart3Dim;
