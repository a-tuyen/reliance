import React from "react";
import Image from "next/image";

const Chart5Dim = ({
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
  dMeasureIn,
  dMeasureMm,
  eMeasureIn,
  eMeasureMm
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
  
        <td className="border-b-0 align-bottom lg:align-middle pb-2 lg:pb-0">{diaIn}</td>
        <td className="border-b-0 align-bottom lg:align-middle pb-2 lg:pb-0">{widIn}</td>
        <td className="border-b-0 align-bottom lg:align-middle pb-2 lg:pb-0">{cDiaIn}</td>
        <td className="border-b-0 align-bottom lg:align-middle pb-2 lg:pb-0">{dMeasureIn}</td>
        <td className="border-b-0 align-bottom lg:align-middle pb-2 lg:pb-0">{eMeasureIn}</td>
      </tr>

      <tr>
        <td className="bg-alum text-white border-l-0 px-1">AL</td>
        <td className="bg-alumLight">{alCode}</td>
        <td className="bg-alumLight border-r-0">
          {alLb} {alKg}
        </td>

        <td className="border-t-0 align-top lg:align-middle pt-2 lg:pt-0">{diaMm}</td>
        <td className="border-t-0 align-top lg:align-middle pt-2 lg:pt-0">{widMm}</td>
        <td className="border-t-0 align-top lg:align-middle pt-2 lg:pt-0">{cDiaMm}</td>
        <td className="border-t-0 align-top lg:align-middle pt-2 lg:pt-0">{dMeasureMm}</td>
        <td className="border-t-0 align-top lg:align-middle pt-2 lg:pt-0">{eMeasureMm}</td>
      </tr>
      <tr></tr>
    </>
  );
};

export default Chart5Dim;
