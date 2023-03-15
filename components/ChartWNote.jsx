import React from "react";

const ChartWNote = ({
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
  notes
}) => {
  return (

        <tr>
          <td className="bg-zincLight">{znCode}</td>
          <td className="bg-zincLight border-r-0">{znLb}</td>
          <td className="bg-zincLight border-l-0">{znKg}</td>
          <td className="bg-alumLight">{alCode}</td>
          <td className="bg-alumLight border-r-0">{alLb}</td>
          <td className="bg-alumLight border-l-0">{alKg}</td>
          <td className="border-r-0">{diaIn}</td>
          <td className="border-l-0">{diaMm}</td>
          <td className="border-r-0">{widIn}</td>
          <td className="border-l-0">{widMm}</td>
          <td className="border-r-0">{cDiaIn}</td>
          <td className="border-l-0">{cDiaMm}</td>
          <td>{notes}</td>

        </tr>

  );
};

export default ChartWNote;
