import React from "react";

const Chart2DimNotesBottom = ({
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
  note1,
  note2,
  note3,
}) => {
  return (
    <>
      <tr>
        <th colSpan={2}>ITEM #</th>
        <th>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div>lb</div>
            <div className="px-2">(kg)</div>
          </div>
        </th>
        <th>BASE DIAMETER</th>
        <th>SHAFT DIAMETER</th>
      </tr>
      <tr>
        <td className="bg-zinc text-white border-l-0 px-1">ZN</td>
        <td className="bg-zincLight">{znCode}</td>
        <td className="bg-zincLight border-r-0">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div>{znLb}</div>
            <div className="pl-2">{znKg}</div>
          </div>
        </td>
        <td className="border-b-0">{diaIn}</td>
        <td className="border-b-0">{widIn}</td>
      </tr>

      <tr>
        <td className="bg-alum text-white border-l-0 border-b-4">AL</td>
        <td className="bg-alumLight">{alCode}</td>
        <td className="bg-alumLight border-r-0">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div>{alLb}</div>
            <div className="pl-2">{alKg}</div>
          </div>
        </td>
        <td className="border-t-0">{diaMm}</td>
        <td className="border-t-0">{widMm}</td>
      </tr>

      <tr>
        <td colSpan={5} className="border-t-0 border-b-0">
          {note1}
        </td>
      </tr>
      <tr>
        <td colSpan={5} className="border-t-0 border-b-0">
          {note2}
        </td>
      </tr>
      <tr>
        <td colSpan={5} className="border-t-0 border-b-0">
          {note3}
        </td>
      </tr>
    </>
  );
};

export default Chart2DimNotesBottom;
