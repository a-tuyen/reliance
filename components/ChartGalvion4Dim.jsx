import React from "react";

const ChartGalvion4Dim = ({

  znCode,
  znLb,
  znKg,
  aDiaIn,
  aDiaMm,
  bLengthIn,
  bLengthMm,
  internalThread,
  nptIn,
  nptMm
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
        <td className="border-b-0 border-b-4"><p>{aDiaIn}</p><p>{aDiaMm}</p></td>

        <td className="border-b-0 border-b-4"><p>{bLengthIn}</p><p>{bLengthMm}</p></td>
        <td className="border-b-0 border-b-4"><p>{nptIn}</p><p>{nptMm}</p></td>
        <td className="border-b-4">
          {internalThread}
        </td>
      </tr>
    </>
  );
};

export default ChartGalvion4Dim;
