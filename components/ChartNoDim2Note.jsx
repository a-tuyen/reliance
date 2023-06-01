import React from "react";

const ChartNoDim2Note = ({
  znCode,
  znLb,
  znKg,
  alCode,
  alLb,
  alKg,
  note1,
  note2
}) => {
  return (
<>
        <tr>
          <td className="bg-zinc text-white">ZN</td>
          <td className="bg-zincLight">{znCode}</td>
          <td className="bg-zincLight border-r-0">{znLb}</td>
          <td className="bg-zincLight border-l-0">{znKg}</td>
          <td rowSpan={2} className="border-b-0">{note1}</td>
          <td rowSpan={2} className="border-b-0">{note2}</td>
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

export default ChartNoDim2Note;