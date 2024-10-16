import React from "react";

const ChartGalvionBrass3Dim = ({

  znCode,
  znLb,
  znKg,
  nptIn,
  nptMm,
  wrenchIn,
  wrenchMm,
  internalThread

}) => {
  return (
    <>
      <tr>
        <td className="bg-zinc text-white border-l-0 px-1">ZN</td>
        <td className="bg-zincLight pl-1 border-b-4">
          {znCode}
        </td>
        <td className="bg-zincLight border-r-0 border-b-4">
          <div className="flex flex-col justify-center items-center px-1">
            <div>{znLb}</div>
            <div className="pl-2">{znKg}</div>
          </div>
        </td>
        <td className="border-b-0 border-b-4">
          <div className="flex flex-col justify-center items-center px-1">
            <div>{nptIn}</div>
            <div className="pl-2">{nptMm}</div>
          </div>
        </td>
        <td className="border-b-0 border-b-4">
        <div className="flex flex-col justify-center items-center px-1">
            <div>{wrenchIn}</div>
            <div className="pl-2">{wrenchMm}</div>
          </div>
        </td>
        <td className="border-b-4">
          {internalThread}
        </td>
      </tr>
    </>
  );
};

export default ChartGalvionBrass3Dim;
