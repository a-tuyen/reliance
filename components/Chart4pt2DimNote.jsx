import React from "react";

const Chart4pt2DimNote = ({
  compZnCode,
  compZnLb,
  compZnKg,
  replZnCode,
  replZnLb,
  replZnKg,
  compAlCode,
  compAlLb,
  compAlKg,
  replAlCode,
  replAlLb,
  replAlKg,
  diaIn,
  diaMm,
  widIn,
  widMm,
  cPlugThread,
}) => {
  return (
    <>
      <tr>
        <td className="bg-zinc text-white border-l-0 px-1">ZN</td>
        <td className="bg-zincLight pl-1">
          {replZnCode} - <p className="text-sm md:text-lg">REPLACEMENT</p>
        </td>
        <td className="bg-zincLight border-r-0">
          <div className="flex flex-col md:flex-row justify-center items-center px-1">
            <div>{replZnLb}</div>
            <div className="pl-2">{replZnKg}</div>
          </div>
        </td>
        <td rowSpan={2} className="border-b-0">{diaIn}</td>
        <td rowSpan={2} className="border-b-0">{widIn}</td>
        <td rowSpan={4} className="border-b-4">
          {cPlugThread}
        </td>
      </tr>
      <tr>
        <td className="bg-alum text-white border-l-0 px-1">AL </td>
        <td className="bg-alumLight pl-1 ">
          {replAlCode} - <p className="text-sm md:text-lg">REPLACEMENT</p>
        </td>
        <td className="bg-alumLight border-r-0">
          <div className="flex flex-col md:flex-row justify-center items-center px-1">
            <div>{replAlLb}</div>
            <div className="pl-2">{replAlKg}</div>
          </div>
          </td>
      </tr>

      <tr>
        <td className="bg-zinc text-white border-l-0 px-1">ZN</td>

        <td className="bg-zincLight pl-1">
          {compZnCode} - <p className="text-sm md:text-lg">COMPLETE</p>
        </td>
        <td className="bg-zincLight border-r-0">
          <div className="flex flex-col md:flex-row justify-center items-center px-1">
            <div>{compZnLb}</div>
            <div className="pl-2">{compZnKg}</div>
          </div>
        </td>

        <td rowSpan={2} className="border-t-0 border-b-4">{diaMm}</td>
        <td rowSpan={2} className="border-t-0 border-b-4">{widMm}</td>
      </tr>

      <tr>
        <td className="bg-alum text-white border-l-0 border-b-4 px-1">AL</td>

        <td className="bg-alumLight pl-1 border-b-4">
          {compAlCode} - <p className="text-sm md:text-lg">COMPLETE</p>
        </td>
        <td className="bg-alumLight border-r-0  border-b-4">
          <div className="flex flex-col md:flex-row justify-center items-center px-1">
            <div>{compAlLb}</div>
            <div className="pl-2">{compAlKg}</div>
          </div>
        </td>
        </tr>

    </>
  );
};

export default Chart4pt2DimNote;
