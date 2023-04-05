import React from "react";

const ChartEngine4Dim = ({
  compCode,
  compLb,
  compKg,
  replCode,
  replLb,
  replKg,
  diaIn,
  diaMm,
  widIn,
  widMm,
  cDiaIn,
  cDiaMm,
  cPlugThread,
}) => {
  return (
    <>
      <tr>
        <td className="bg-zinc text-white border-l-0 px-1">ZN</td>
        <td className="bg-zincLight pl-1">
          {replCode} - <p className="text-sm md:text-lg">REPLACEMENT</p>
        </td>
        <td className="bg-zincLight border-r-0">
          <div className="flex flex-col md:flex-row justify-center items-center px-1">
            <div>{replLb}</div>
            <div className="pl-2">{replKg}</div>
          </div>
        </td>
        <td className="border-b-0">{diaIn}</td>

        <td className="border-b-0">{widIn}</td>
        <td className="border-b-0">{cDiaIn}</td>
        <td rowSpan={2} className="border-b-4">
          {cPlugThread}
        </td>
      </tr>
      <tr>
        <td className="bg-zinc text-white border-l-0 border-b-4 px-1">ZN</td>

        <td className="bg-zincLight pl-1 border-b-4">
          {compCode} - <p className="text-sm md:text-lg">COMPLETE</p>
        </td>
        <td className="bg-zincLight border-r-0  border-b-4">
          <div className="flex flex-col md:flex-row justify-center items-center px-1">
            <div>{compLb}</div>
            <div className="pl-2">{compKg}</div>
          </div>
        </td>

        <td className="border-t-0 border-b-4">{diaMm}</td>
        <td className="border-t-0 border-b-4">{widMm}</td>
        <td className="border-t-0 border-b-4">{cDiaMm}</td>
      </tr>
    </>
  );
};

export default ChartEngine4Dim;
