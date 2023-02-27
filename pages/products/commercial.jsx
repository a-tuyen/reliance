import Hero from "@/components/Hero";
import React from "react";
import Link from "next/link";

const commercial = () => {
  return (
    <div className="bg-white flex  flex-col justify-center">
      <Hero
        heading={"Commercial Anodes"}
        message={
          "We offer anodes to protect a wide range of commercial assets including: Merchant and naval vessels, piers, dry docks and retaining walls, offshore driling platforms and pipelines and oceanographic equipment"
        }
        img={"bg-img4"}
      />
      <section>
        <ul>
          <li>
            <Link href="/products/commercial/ballast">Ballast Tank Anodes</Link>
          </li>
          <li>
            <Link href="/products/commercial/ballast">
              Commercial Bolt-On (Pie Anodes)
            </Link>
          </li>
          <li>
            <Link href="/products/commercial/ballast">Commercial Rods</Link>
          </li>
          <li>
            <Link href="/products/commercial/ballast">Commercial Plates</Link>
          </li>
          <li>
            <Link href="/products/commercial/ballast">Crab Trap Anodes</Link>
          </li>
          <li>
            <Link href="/products/commercial/ballast">
              Heat Exchanger Anodes
            </Link>
          </li>
          <li>
            <Link href="/products/commercial/ballast">
              Heater Treater Anodes
            </Link>
          </li>
          <li>
            <Link href="/products/commercial/ballast">Hull Anodes</Link>
          </li>
          <li>
            <Link href="/products/commercial/ballast">
              Propeller Nut Anodes
            </Link>
          </li>
          <li>
            <Link href="/products/commercial/ballast">
              Semi-Streamlined Anodes
            </Link>
          </li>
          <li>
            <Link href="/products/commercial/ballast">
              Weld On and Bolt On Anodes
            </Link>
          </li>
          <li>
            <Link href="/products/commercial/ballast">Streamlined Anodes</Link>
          </li>
          <li>
            <Link href="/products/commercial/ballast">Teardrop Anodes</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default commercial;
