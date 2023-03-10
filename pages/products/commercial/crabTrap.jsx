import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";

const crabTrap = () => {
  return (
    <div>
      <Hero heading={"Crab Trap Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:justify-start w-[100%]">
        <SideBarComm />
        <main>
          <article>
            <table>
              <tbody>
                <tr>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </article>
        </main>
      </div>
    </div>
  );
};

export default crabTrap;
