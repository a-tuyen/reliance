import React from "react";
import Image from "next/image";

const ChartNoDimNotePic = ({
  img,
  znCode,
  znLb,
  znKg,
  alCode,
  alLb,
  alKg,
  notes,
  headerNotes
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
        <th>{headerNotes}</th>
      </tr>

      <tr>
        <td className="bg-zinc text-white border-l-0 px-1">ZN</td>
        <td className="bg-zincLight">{znCode}</td>
        <td className="bg-zincLight border-r-0">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div>{znLb}</div>
            <div className="px-2">{znKg}</div>
          </div>
        </td>
        <td rowSpan={2} className="border-b-0">
          {notes}
        </td>
      </tr>

      <tr>
        
        <td className="bg-alum text-white border-l-0 border-b-4">AL</td>
        <td className="bg-alumLight border-b-4">{alCode}</td>
        <td className="bg-alumLight border-r-0 border-b-4">
          {alLb} {alKg}
        </td>
      </tr>
      <tr>
        <td colSpan={4} className="bg-white py-4">
          <div className=" flex flex-col items-center w-[100%]">
            <p className="font-extrabold pb-2">{znCode}</p>
            <Image src={img} alt="picture of anode" width="200" height="150" />
          </div>
        </td>
      </tr>
    </>
  );
};

export default ChartNoDimNotePic;
