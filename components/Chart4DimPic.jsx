import React from "react";
import Image from "next/image";

const Chart4DimPic = ({
  img,
  imgAlt,
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
  notes,
}) => {
  return (
    <>
      <tr>
        <td colspan={2} rowspan={2}>
          <Image
            src={img}
            alt="picture of anode"
            className="min-w-[80px] block ml-auto mr-auto"
            width={100}
            height={100}
          />
        </td>

        <td className="bg-zinc text-white border-l-0">ZN</td>
        <td className="bg-zincLight">{znCode}</td>
        <td className="bg-zincLight border-r-0">{znLb}</td>
        {/* <td className="bg-zincLight border-l-0">{znKg}</td> */}
        <td className="border-b-0">{diaIn}</td>

        <td className="border-b-0">{widIn}</td>

        <td className="border-b-0">{cDiaIn}</td>

        <td className="border-b-0">{dMeasureIn}</td>
      </tr>

      <tr>
        <td className="bg-alum text-white border-l-0">AL</td>
        <td className="bg-alumLight">{alCode}</td>
        <td className="bg-alumLight border-r-0">{alLb}</td>
        {/* <td className="bg-alumLight border-l-0">{alKg}</td> */}
        <td className="border-t-0">{diaMm}</td>
        <td className="border-t-0">{widMm}</td>
        <td className="border-t-0">{cDiaMm}</td>
        <td className="border-t-0">{dMeasureMm}</td>
      </tr>
      <tr>
        <td colspan={14} className="text-left pl-4">
          Notes:{notes}
        </td>
      </tr>
    </>
  );
};

export default Chart4DimPic;

{
  /* <td rowspan={2} className="border-l-0">
{diaMm}
</td>
<td rowspan={2} className="border-r-0">
{widIn}
</td>
<td rowspan={2} className="border-l-0">
{widMm}
</td>
<td rowspan={2} className="border-r-0">
{cDiaIn}
</td>
<td rowspan={2} className="border-l-0">
{cDiaMm}
</td>
<td rowspan={2} className="border-r-0">
{dMeasureIn}
</td>
<td rowspan={2} className="border-l-0">
{dMeasureMm}
</td> */
}