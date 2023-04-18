import React from "react";

const ChartNoDim = ({
  znCode,
  znLb,
  znKg,
  alCode,
  alLb,
  alKg,
}) => {
  return (
<>
        <tr>
          <td className="bg-zinc text-white">ZN</td>
          <td className="bg-zincLight">{znCode}</td>
          <td className="bg-zincLight border-r-0">{znLb}</td>
          <td className="bg-zincLight border-l-0">{znKg}</td>

        </tr>
        <tr>
        <td className="bg-alum text-white border-b-4">AL</td>
        <td className="bg-alumLight border-b-4">{alCode}</td>
          <td className="bg-alumLight border-r-0 border-b-4">{alLb}</td>
          <td className="bg-alumLight border-l-0 border-b-4">{alKg}</td>
        </tr>
        </>

  );
};

export default ChartNoDim;