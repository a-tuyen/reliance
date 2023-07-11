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
        <td className="bg-zincLight">
          <div className="flex flex-col lg:flex-row justify-center">
            {replZnCode} -
            <p className="text-sm md:text-lg lg:pl-1">REPLACEMENT</p>
          </div>
        </td>
        <td className="bg-zincLight border-r-0">
          <div className="flex flex-col lg:flex-row justify-center items-center px-1">
            <div>{replZnLb}</div>
            <div className="lg:pl-2">{replZnKg}</div>
          </div>
        </td>
        <td className="border-b-0"></td>
        <td className="border-b-0"></td>
        <td rowSpan={4} className="border-t-0 border-b-4">
          {cPlugThread}
        </td>
      </tr>
      <tr>
        <td className="bg-alum text-white border-l-0 px-1">AL </td>
        <td className="bg-alumLight">
          <div className="flex flex-col lg:flex-row justify-center">
            {replAlCode} - <p className="text-sm md:text-lg lg:pl-1">REPLACEMENT</p>
          </div>
        </td>
        <td className="bg-alumLight border-r-0">
          <div className="flex flex-col lg:flex-row justify-center items-center px-1">
            <div>{replAlLb}</div>
            <div className="lg:pl-2">{replAlKg}</div>
          </div>
        </td>
        <td className="border-t-0 border-b-0">{diaIn}</td>
        <td className="border-t-0 border-b-0">{widIn}</td>
      </tr>

      <tr>
        <td className="bg-zinc text-white border-l-0 px-1">ZN</td>

        <td className="bg-zincLight">
          <div className="flex flex-col lg:flex-row justify-center">
            {compZnCode} - <p className="text-sm md:text-lg lg:pl-1">COMPLETE</p>
          </div>
        </td>
        <td className="bg-zincLight border-r-0">
          <div className="flex flex-col lg:flex-row justify-center items-center px-1">
            <div>{compZnLb}</div>
            <div className="lg:pl-2">{compZnKg}</div>
          </div>
        </td>

        <td className="border-t-0 border-b-0">{diaMm}</td>
        <td className="border-t-0 border-b-0">{widMm}</td>
      </tr>

      <tr>
        <td className="bg-alum text-white border-l-0 px-1">AL</td>

        <td className="bg-alumLight pl-1">
          <div className="flex flex-col lg:flex-row justify-center">
            {compAlCode} - <p className="text-sm md:text-lg lg:pl-1">COMPLETE</p>
          </div>
        </td>
        <td className="bg-alumLight border-r-0 border-b-0">
          <div className="flex flex-col lg:flex-row justify-center items-center border-b-0 px-1">
            <div>{compAlLb}</div>
            <div className="lg:pl-2">{compAlKg}</div>
          </div>
        </td>
        <td className="border-t-0 border-b-4"></td>
        <td className="border-t-0 border-b-4"></td>
      </tr>
    </>
  );
};

export default Chart4pt2DimNote;
