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
          {znLb} {znKg}
        </td>
        <td className="border-b-0">{diaIn}</td>
        <td className="border-b-0">{widIn}</td>
        <td className="border-b-0">{cDiaIn}</td>
      </tr>

      <tr>
        <td className="bg-alum text-white border-l-0">AL</td>
        <td className="bg-alumLight">{alCode}</td>
        <td className="bg-alumLight border-r-0">
          {alLb} {alKg}
        </td>
        <td className="border-t-0">{diaMm}</td>
        <td className="border-t-0">{widMm}</td>
        <td className="border-t-0">{cDiaMm}</td>
      </tr>
    </>
  );
};

export default Chart3Dim;
