import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartNoDimNotePic from "@/components/ChartNoDimNotePic";
import Image from "next/image";
import Link from "next/link";

const mercuryData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/233703530-8a1fcb04-6695-47ca-802e-2a39b3354c58.png",
    znCode: "MD-31640",
    znLb: "1.05 lb",
    znKg: "(0.48 kg)",
    alCode: "AMD-31640",
    alLb: "0.41 lb",
    alKg: "(0.19 kg)",
    notes: "7/16-14 UNC",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703543-09a71411-79c3-420b-a26e-be4da55ba4a6.png",
    znCode: "MD-34127",
    znLb: "1.29 lb",
    znKg: "(0.59 kg)",
    alCode: "AMD-34127",
    alLb: "0.5 lb",
    alKg: "(0.23 kg)",
    notes: "7/16-14 UNC",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703531-b26f127b-b62a-4d01-919f-220c798e6b17.png",
    znCode: "MD-34762",
    znLb: "0.52 lb",
    znKg: "(0.24 kg)",
    alCode: "AMD-34762",
    alLb: "0.2 lb",
    alKg: "(0.09 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703532-4e494cb6-412e-4d56-a2ce-54f29ffa1d66.png",
    znCode: "MD-46399",
    znLb: "0.82 lb",
    znKg: "(0.37 kg)",
    alCode: "AMD-46399",
    alLb: "0.32 lb",
    alKg: "(0.15 kg)",
    notes: "7/16-14 UNC",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703539-96ade914-585e-46ea-aea5-d87f3e84b3f0.png",
    znCode: "MD-55989 (1/2)",
    znLb: "0.23 lb",
    znKg: "(0.1 kg)",
    alCode: "AMD-55989 (1/2)",
    alLb: "0.09 lb",
    alKg: "(0.04 kg)",
    notes: "1/2-13 UNC",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703539-96ade914-585e-46ea-aea5-d87f3e84b3f0.png",
    znCode: "MD-55989 (1/4)",
    znLb: "0.23 lb",
    znKg: "(0.1 kg)",
    alCode: "AMD-55989 (1/4)",
    alLb: "0.09 lb",
    alKg: "(0.04 kg)",
    notes: "1/4-20 UNC",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703539-96ade914-585e-46ea-aea5-d87f3e84b3f0.png",
    znCode: "MD-55989 (7/16)",
    znLb: "0.23 lb",
    znKg: "(0.1 kg)",
    alCode: "AMD-55989 (7/16)",
    alLb: "0.09 lb",
    alKg: "(0.04 kg)",
    notes: "7/16-14 UNC",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703533-415e21b2-ffd3-47b8-8bdc-e40e751db366.png",
    znCode: "MD-76214",
    znLb: "0.61 lb",
    znKg: "(0.28 kg)",
    alCode: "AMD-76214",
    alLb: "0.24 lb",
    alKg: "(0.11 kg)",
    notes: "7/16-14 UNC",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703533-415e21b2-ffd3-47b8-8bdc-e40e751db366.png",
    znCode: "MD-76214-4 (UNTHREADED)",
    znLb: "0.62 lb",
    znKg: "(0.28 kg)",
    alCode: "AMD-76214-4 (UNTHREADED)",
    alLb: "0.24 lb",
    alKg: "(0.11 kg)",
    notes: "UNTHREADED",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703533-415e21b2-ffd3-47b8-8bdc-e40e751db366.png",
    znCode: "MD-76214-5",
    znLb: "0.65 lb",
    znKg: "(0.29 kg)",
    alCode: "AMD-76214-5",
    alLb: "0.25 lb",
    alKg: "(0.11 kg)",
    notes: "7/16-14 UNC",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703537-5a651e6e-4a3f-46e9-be1d-32a8ac189a53.png",
    znCode: "MD-43994",
    znLb: "1.95 lb",
    znKg: "(0.88 kg)",
    alCode: "N/A",
    alLb: "- lb",
    alKg: "(- kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703541-bfbef6a0-2483-4a9b-858a-15d24f258696.png",
    znCode: "MD-43396",
    znLb: "1.46 lb",
    znKg: "(0.66 kg)",
    alCode: "N/A",
    alLb: "- lb",
    alKg: "(- kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703547-09dc85c0-5772-454c-9d57-986071f7d91d.png",
    znCode: "MD-806105",
    znLb: "0.49 lb",
    znKg: "(0.22 kg)",
    alCode: "AMD-806105",
    alLb: "0.19 lb",
    alKg: "(0.09 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703549-b76dab73-b17e-4fd5-92ac-621b7f28e8b4.png",
    znCode: "MD-806189",
    znLb: "0.19 lb",
    znKg: "(0.09 kg)",
    alCode: "AMD-806189",
    alLb: "0.07 lb",
    alKg: "(0.03 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703535-57898cb0-cddd-4b76-a5ee-d3114e583104.png",
    znCode: "MD-822157-C2",
    znLb: "1.06 lb",
    znKg: "(0.48 kg)",
    alCode: "N/A",
    alLb: "- lb",
    alKg: "(- kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703573-2a17a32c-ef38-4121-bb5a-a01c9ae91e62.png",
    znCode: "MD-823912",
    znLb: "0.35 lb",
    znKg: "(0.16 kg)",
    alCode: "AMD-823912",
    alLb: "0.14 lb",
    alKg: "(0.06 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703573-2a17a32c-ef38-4121-bb5a-a01c9ae91e62.png",
    znCode: "MD-823913",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMD-823913",
    alLb: "0.45 lb",
    alKg: "(0.2 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703548-f3c2a397-9472-4b01-bae8-9d8bf2291fd4.png",
    znCode: "MD-892227",
    znLb: "0.30 lb",
    znKg: "(0.14 kg)",
    alCode: "AMD-892227",
    alLb: "0.12 lb",
    alKg: "(0.05 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703550-5f03001b-4311-42c4-9262-d6d5c49baabd.png",
    znCode: "MD-826134",
    znLb: "0.56 lb",
    znKg: "(0.25 kg)",
    alCode: "AMD-826134",
    alLb: "0.34 lb",
    alKg: "(0.15 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703565-51a06e9d-1f73-4436-a96b-d429dbdd60d8.png",
    znCode: "MD-847266",
    znLb: "N/A lb",
    znKg: "(- kg)",
    alCode: "AMD-847266",
    alLb: "0.05 lb",
    alKg: "(0.02 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703553-442271b0-6bbb-43dc-9b4c-f6865ef218bd.png",
    znCode: "MD-89949",
    znLb: "2.36 lb",
    znKg: "(1.07 kg)",
    alCode: "N/A",
    alLb: "- lb",
    alKg: "(- kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703557-9cd78768-5546-4dd9-a6c2-44459bfcf2b5.png",
    znCode: "MD-818298",
    znLb: "1.4 lb",
    znKg: "(0.64 kg)",
    alCode: "AMD-818298",
    alLb: "0.55 lb",
    alKg: "(0.25 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703558-b218e50c-b04c-4514-b8cc-2e2682062c1f.png",
    znCode: "MD-821629",
    znLb: "1.59 lb",
    znKg: "(0.72 kg)",
    alCode: "AMD-821629",
    alLb: "0.62 lb",
    alKg: "(0.28 kg)",
    notes: "1/4-20 UNC",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703561-576ff112-729d-45f6-9052-ea8df7d243e8.png",
    znCode: "MD-821630",
    znLb: "2.21 lb",
    znKg: "(1 kg)",
    alCode: "AMD-821630",
    alLb: "0.86 lb",
    alKg: "(0.39 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703538-d5ee40c0-4163-454a-88f5-efc9c5e23ea4.png",
    znCode: "MD-821631",
    znLb: "1.99 lb",
    znKg: "(0.9 kg)",
    alCode: "AMD-821631",
    alLb: "0.78 lb",
    alKg: "(0.35 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703570-841c9e75-3c3c-459c-8bb4-e6c35fdd2494.png",
    znCode: "MD-806190",
    znLb: "0.67 lb",
    znKg: "(0.3 kg)",
    alCode: "AMD-806190",
    alLb: "0.26 lb",
    alKg: "(0.12 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703562-dbc75772-3ec7-438c-813a-9ada914efd72.png",
    znCode: "MD-98432-5",
    znLb: "0.94 lb",
    znKg: "(0.43 kg)",
    alCode: "AMD-98432-5",
    alLb: "0.37 lb",
    alKg: "(0.17 kg)",
    notes: "M8 x 1.25",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703568-3b1edca1-abf9-49a0-ad8f-2ec71f1ff34f.png",
    znCode: "MD-806188",
    znLb: "0.33 lb",
    znKg: "(0.15 kg)",
    alCode: "AMD-806188",
    alLb: "0.13 lb",
    alKg: "(0.06 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703572-f33a4a84-eabe-4353-bf9f-68113ec4175b.png",
    znCode: "MD-865182",
    znLb: "1.12 lb",
    znKg: "(0.51 kg)",
    alCode: "AMD-865182",
    alLb: "0.44 lb",
    alKg: "(0.2 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703567-1c583c44-f2d8-430e-bfd2-d906658e066c.png",
    znCode: "MD-848653T K-PLANE",
    znLb: "N/A lb",
    znKg: "( kg)",
    alCode: "AMD-848653T K-PLANE",
    alLb: "0.65 lb",
    alKg: "(0.29 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703565-51a06e9d-1f73-4436-a96b-d429dbdd60d8.png",
    znCode: "MD-847332 K-PLANE",
    znLb: "N/A lb",
    znKg: "( kg)",
    alCode: "AMD-847332 K-PLANE",
    alLb: "0.44 lb",
    alKg: "(0.2 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703565-51a06e9d-1f73-4436-a96b-d429dbdd60d8.png",
    znCode: "MD-847266 K-PLANE",
    znLb: "N/A lb",
    znKg: "( kg)",
    alCode: "AMD-847266 K-PLANE",
    alLb: "0.18 lb",
    alKg: "(0.08 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703564-6826dd07-8a19-4cd7-a8eb-fba4d1715b67.png",
    znCode: "MD-875208",
    znLb: "0.06 lb",
    znKg: "(0.03 kg)",
    alCode: "AMD-875208",
    alLb: "0.02 lb",
    alKg: "(0.01 kg)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233703571-a6ea106b-fbd0-4f79-b82c-e68beb6aa7ad.png",
    znCode: "MD-880653",
    znLb: "1.10 lb",
    znKg: "(0.5 kg)",
    alCode: "AMD-880653",
    alLb: "0.43 lb",
    alKg: "(0.2 kg)",
    notes: "",
  },
];

const mercury = () => {
  return (
    <div>
      <Hero
        heading={"Mercury Anodes"}
        message={
          "Carefully designed by our skilled technicians to fit like an OEM part"
        }
        img={"bg-img2"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>MERCURY</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                {/* <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr> */}
                {mercuryData.map((item, id) => (
                  <ChartNoDimNotePic
                    key={id}
                    img={item.img}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                    notes={item.notes}
                    headerNotes="LENGTH"
                  />
                ))}
              </tbody>
            </table>
          </main>
        </article>
      </div>
    </div>
  );
};

export default mercury;
