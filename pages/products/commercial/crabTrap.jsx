import React from 'react'
import Hero from '@/components/Hero'
import SideBarComm from '@/components/SideBarComm'
import Chart3Dim from '@/components/Chart3Dim'

const crabTrapData = [
  {
    znCode: 'MDCT-3',
    znLb: '3.00',
    znKg: '(1.35)',
    alCode: 'AMDCT-3',
    alLb: '1.3',
    alKg: '(0.600)',
    diaIn: '3 1/4',
    diaMm: '(83)',
    widIn: '1 1/4',
    widMm: '(32)',
    cDiaIn: '1/2',
    cDiaMm: '(13)',
  },
  {
    znCode: 'MDCT-3 HEX',
    znLb: '3.00',
    znKg: '(1.35)',
    alCode: 'AMDCT-3 HEX',
    alLb: '1.3',
    alKg: '(0.600)',
    diaIn: '3',
    diaMm: '(76)',
    widIn: '1 3/8',
    widMm: '(35)',
    cDiaIn: '1/2',
    cDiaMm: '(13)',

  },
  {
    znCode: 'MDCT-5 HEX',
    znLb: '5.00',
    znKg: '(2.27)',
    alCode: 'AMDCT-5 HEX',
    alLb: '2.53',
    alKg: '(1.136)',
    diaIn: '3 3/4',
    diaMm: '(95)',
    widIn: '1 1/4',
    widMm: '(32)',
    cDiaIn: '1/2',
    cDiaMm: '(13)',
  }
]

const crabTrap = () => {
  return (
    <div>
    <Hero heading={"Crab Trap Anodes"} message={""} img={"bg-img5"} />
    <div className="flex flex-col lg:flex-row items-center lg:justify-start w-[100%]">
<SideBarComm />
<article>
<main>
  <table>
    <tbody>
      <tr>
        <th colSpan={6}>NOMINAL WEIGHT</th>
        <th colSpan={6}>NOMINAL DIMENSIONS</th>
      </tr>
      <tr>
        <th colSpan={3} className="bg-zinc">
          ZINC ANODE
        </th>
        <th colSpan={3} className="bg-alum">
          ALUMINUM ANODE
        </th>
        <th colSpan={2}>DIAMETER</th>
        <th colSpan={2}>WIDTH</th>
        <th colSpan={2}>BOLT DIAMETER</th>
      </tr>

      <tr>
        <th className="bg-zinc">ITEM #</th>
        <th className="bg-zinc border-r-0">lb</th>
        <th className="bg-zinc border-l-0">(kg)</th>
        <th className="bg-alum">ITEM #</th>
        <th className="bg-alum border-r-0">lb</th>
        <th className="bg-alum border-l-0">(kg)</th>
        <th className="border-r-0">in</th>
        <th className="border-l-0">(mm)</th>
        <th className="border-r-0">in</th>
        <th className="border-l-0">(mm)</th>
        <th className="border-r-0">in</th>
        <th className="border-l-0">(mm)</th>
      </tr>
      {crabTrapData.map((item, id) => (
        <Chart3Dim
          key={id}
          znCode={item.znCode}
          znLb={item.znLb}
          znKg={item.znKg}
          alCode={item.alCode}
          alLb={item.alLb}
          alKg={item.alKg}
          diaIn={item.diaIn}
          diaMm={item.diaMm}
          widIn={item.widIn}
          widMm={item.widMm}
          cDiaIn={item.cDiaIn}
          cDiaMm={item.cDiaMm}
        />
      ))}
    </tbody>
  </table>
</main>
</article>
</div>
</div>
  )
}

export default crabTrap