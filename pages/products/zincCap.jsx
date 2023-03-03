import Hero from "@/components/Hero";
import React from "react";

const zincCap = () => {
  return (
    <div className="bg-white flex flex-col justify-center">
      <Hero
        heading={"Zinc Caps"}
        message={
          "Reliance Zinc Caps offer cathodic protection to underground and submerged threads, bolts and nuts on glands, flanges and mechanical fittings.  They are designed to be used on buried pipelines, in water treatment plants, weirs, lock gates and any other structures with exposed metallic threads."
        }
        img={"bg-img3"}
      />
      <table>
        <tbody>
          <tr>
            <th colSpan={"3"}> SHG ZINC COMPOSITION</th>
          </tr>
          <tr>
            <th>MATERIAL</th>
            <th>MIL-A-18001J SPECIFICATIONS</th>
            <th>ASTM B418-80 SPECIFICATIONS</th>
          </tr>
          <tr>
            <td>Aluminum</td>
            <td>0.10 - 0.50%</td>
            <td>0.10 - 0.4%</td>
          </tr>
          <tr>
            <td>Cadmium</td>
            <td>0.025 - 0.15%</td>
            <td>0.03 - 0.10%</td>
          </tr>
          <tr>
            <td>Iron (maximum)</td>
            <td>0.005%</td>
            <td>0.005%</td>
          </tr>
          <tr>
            <td>Lead (maximum)</td>
            <td>0.006%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Copper (maximum)</td>
            <td>0.005%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Silicon (maximum)</td>
            <td>0.125%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Zinc</td>
            <td>Remainder</td>
            <td>Remainder</td>
          </tr>
        </tbody>
      </table>

      {/* <h1>Reliance Zinc Cap - 6 oz</h1> */}
      <table className="bg-gray-300 mx-[10%]">
        <tbody>
        <tr className="bg-black text-white">
          <th colSpan={"9"} className="border-2 border-white py-4"><h1>Reliance Zinc Cap Specifications</h1></th>
        </tr>
        <tr className="uppercase bg-black text-white">
        <th className="border-2 border-white">Thread Size</th>
          <th colSpan={"6"} className="border-2 border-white">Dimensions</th>
          <th colSpan={"2"} className="border-2 border-white">Nominal Weight</th>
        </tr>
        <tr className="uppercase bg-black text-white">
          <th>A</th>
          <th colSpan={"2"} className="border-2 border-white">B</th>
          <th colSpan={"2"} className="border-2 border-white">C</th>
          <th colSpan={"2"} className="border-2 border-white">D</th>
          <th colSpan={"2"} className="border-2 border-white"></th>
        </tr>
        <tr>
          <th className="border-2 border-white text-center">Reliance Zinc Cap - 6 oz</th>
          <th className="border-2 border-white border-r-0 text-center">Inches</th>
          <th className="border-2 border-white border-l-0 text-center">mm</th>
          <th className="border-2 border-white border-r-0 text-center">Inches</th>
          <th className="border-2 border-white border-l-0 text-center">mm</th>
          <th className="border-2 border-white border-r-0 text-center">Inches</th>
          <th className="border-2 border-white border-l-0 text-center">mm</th>
          <th className="border-2 border-white border-r-0 text-center">lbs</th>
          <th className="border-2 border-white border-l-0 text-center">kg</th>
        </tr>
        <tr>
          <td className="border-2 border-white text-center">1/2&quot; x 13 UNC</td>
          <td className="border-2 border-white border-r-0 text-center">1.5</td>
          <td className="border-2 border-white border-l-0 text-center">38.1</td>
          <td className="border-2 border-white border-r-0 text-center">0.98</td>
          <td className="border-2 border-white border-l-0 text-center">24.9</td>
          <td className="border-2 border-white border-r-0 text-center">1.69</td>
          <td className="border-2 border-white border-l-0 text-center">42.95</td>
          <td className="border-2 border-white border-r-0 text-center">0.4</td>
          <td className="border-2 border-white border-l-0 text-center">0.15</td>
        </tr>
        <tr>
          <td className="border-2 border-white text-center">5/8&quot; x 11 UNC</td>
          <td className="border-2 border-white border-r-0 text-center">1.5</td>
          <td className="border-2 border-white border-l-0 text-center">38.1</td>
          <td className="border-2 border-white border-r-0 text-center">0.98</td>
          <td className="border-2 border-white border-l-0 text-center">24.9</td>
          <td className="border-2 border-white border-r-0 text-center">1.69</td>
          <td className="border-2 border-white border-l-0 text-center">42.95</td>
          <td className="border-2 border-white border-r-0 text-center">0.4</td>
          <td className="border-2 border-white border-l-0 text-center">0.15</td>
        </tr>
        <tr>
          <td className="border-2 border-white text-center">3/4&quot; x 10 UNC</td>
          <td className="border-2 border-white border-r-0 text-center">1.5</td>
          <td className="border-2 border-white border-l-0 text-center">38.1</td>
          <td className="border-2 border-white border-r-0 text-center">0.98</td>
          <td className="border-2 border-white border-l-0 text-center">24.9</td>
          <td className="border-2 border-white border-r-0 text-center">1.69</td>
          <td className="border-2 border-white border-l-0 text-center">42.95</td>
          <td className="border-2 border-white border-r-0 text-center">0.4</td>
          <td className="border-2 border-white border-l-0 text-center">0.15</td>
        </tr>
        <tr>
          <td className="border-2 border-white text-center">7/8&quot; x 9 UNC</td>
          <td className="border-2 border-white border-r-0 text-center">1.5</td>
          <td className="border-2 border-white border-l-0 text-center">38.1</td>
          <td className="border-2 border-white border-r-0 text-center">0.98</td>
          <td className="border-2 border-white border-l-0 text-center">24.9</td>
          <td className="border-2 border-white border-r-0 text-center">1.69</td>
          <td className="border-2 border-white border-l-0 text-center">42.95</td>
          <td className="border-2 border-white border-r-0 text-center">0.4</td>
          <td className="border-2 border-white border-l-0 text-center">0.15</td>
        </tr>
        <tr>
          <td className="border-2 border-white text-center">1&quot; x 8 UNC</td>
          <td className="border-2 border-white border-r-0 text-center">1.5</td>
          <td className="border-2 border-white border-l-0 text-center">38.1</td>
          <td className="border-2 border-white border-r-0 text-center">0.98</td>
          <td className="border-2 border-white border-l-0 text-center">24.9</td>
          <td className="border-2 border-white border-r-0 text-center">1.69</td>
          <td className="border-2 border-white border-l-0 text-center">42.95</td>
          <td className="border-2 border-white border-r-0 text-center">0.4</td>
          <td className="border-2 border-white border-l-0 text-center">0.15</td>
        </tr>
        <tr>
          <th className="border-2 border-white text-center">Reliance Zinc Cap - 14 oz</th>
          <th className="border-2 border-white border-r-0 text-center">Inches</th>
          <th className="border-2 border-white border-l-0 text-center">mm</th>
          <th className="border-2 border-white border-r-0 text-center">Inches</th>
          <th className="border-2 border-white border-l-0 text-center">mm</th>
          <th className="border-2 border-white border-r-0 text-center">Inches</th>
          <th className="border-2 border-white border-l-0 text-center">mm</th>
          <th className="border-2 border-white border-r-0 text-center">lbs</th>
          <th className="border-2 border-white border-l-0 text-center">kg</th>
        </tr>
        <tr>
          <td className="border-2 border-white text-center">1 1/8&quot; x 7 UNC</td>
          <td className="border-2 border-white border-r-0 text-center">2.3</td>
          <td className="border-2 border-white border-l-0 text-center">58.4</td>
          <td className="border-2 border-white border-r-0 text-center">1.25</td>
          <td className="border-2 border-white border-l-0 text-center">31.8</td>
          <td className="border-2 border-white border-r-0 text-center">1.88</td>
          <td className="border-2 border-white border-l-0 text-center">47.75</td>
          <td className="border-2 border-white border-r-0 text-center">0.9</td>
          <td className="border-2 border-white border-l-0 text-center">0.4</td>
        </tr>
        <tr>
          <td className="border-2 border-white text-center">1 1/4&quot; x 7 UNC</td>
          <td className="border-2 border-white border-r-0 text-center">2.3</td>
          <td className="border-2 border-white border-l-0 text-center">58.4</td>
          <td className="border-2 border-white border-r-0 text-center">1.25</td>
          <td className="border-2 border-white border-l-0 text-center">31.8</td>
          <td className="border-2 border-white border-r-0 text-center">1.88</td>
          <td className="border-2 border-white border-l-0 text-center">47.75</td>
          <td className="border-2 border-white border-r-0 text-center">0.9</td>
          <td className="border-2 border-white border-l-0 text-center">0.4</td>
        </tr>
        <tr>
          <td className="border-2 border-white text-center">1 1/2&quot; x 7 UNC</td>
          <td className="border-2 border-white border-r-0 text-center">2.3</td>
          <td className="border-2 border-white border-l-0 text-center">58.4</td>
          <td className="border-2 border-white border-r-0 text-center">1.25</td>
          <td className="border-2 border-white border-l-0 text-center">31.8</td>
          <td className="border-2 border-white border-r-0 text-center">1.88</td>
          <td className="border-2 border-white border-l-0 text-center">47.75</td>
          <td className="border-2 border-white border-r-0 text-center">0.7</td>
          <td className="border-2 border-white border-l-0 text-center">0.3</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default zincCap;
