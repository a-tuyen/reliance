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

        <tr>
          <td className="bg-zincLight">{znCode}</td>
          <td className="bg-zincLight border-r-0">{znLb}</td>
          <td className="bg-zincLight border-l-0">{znKg}</td>
          <td className="bg-alumLight">{alCode}</td>
          <td className="bg-alumLight border-r-0">{alLb}</td>
          <td className="bg-alumLight border-l-0">{alKg}</td>
        </tr>

  );
};

export default ChartNoDim;