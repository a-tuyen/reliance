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
        <td className="bg-alum text-white">AL</td>
        <td className="bg-alumLight">{alCode}</td>
          <td className="bg-alumLight border-r-0">{alLb}</td>
          <td className="bg-alumLight border-l-0">{alKg}</td>
        </tr>
        </>

  );
};

export default ChartNoDim;