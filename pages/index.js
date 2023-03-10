import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "../components/Hero";
import Link from "next/link";
import Image from "next/image";
import Intro from "@/components/Intro";
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Reliance Anodes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Hero heading='Reliance Anodes' message='A Tradition of Excellence' /> */}
      <Hero
        heading="A World Leader in Cathodic Protection"
        message="Reliance Anodes are made of the highest quality Mil-Spec grade metals. You can always rely on us for your corrosion needs"
        img={"bg-img4"}
      />
      <div className="bg-white flex flex-col justify-center items-center mt-0">
        <div className="w-[70%] text-center py-[50px]">
          <p>
            ​​Metal Distributors is a leading non-ferrous metal manufacturer and
            precision machining company serving a variety of different
            industries including the marine, nuclear, plumbing, construction and
            medical industries.
          </p>
          <p>
            We specialize in lead and lead-based products such as Sheet Lead and
            Lead Bricks for radiation shielding, Lead Anodes for electroplating
            and Lead Sash Weights for counter balances. We also offer our
            Reliance brand of sacrificial anodes​ and custom die casting and CNC
            services. View our full lineup of products{" "}
            <Link href="/products">here.</Link>
          </p>
          <p>
            Our technicians are knowledgeable in all aspects of metalwork, from
            design and pouring to metal finishing and coating. We can help you
            find a solution to your metal needs.
          </p>
          <h2 className="mt-[2rem] mb-[0]">Our Products</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* <Link href="/products/commercial">
            <div className="relative">
              <Image
                src="https://user-images.githubusercontent.com/77664153/222281908-00f261f9-58e7-410d-8a3c-89381ed67eff.png"
                width="200"
                height="200"
                className="m-5 rounded-xl"
              />
              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-xl group">
                <p className="hidden group-hover:block">
                  <Image
                    src="https://user-images.githubusercontent.com/77664153/222214493-729de5a9-b5ad-443b-b5c5-8d9f296f54b9.png"
                    width="200"
                    height="200"
                    className="m-5 rounded-xl"
                  />
                </p>
              </div>
            </div>
          </Link>

          <Link href="/products/pleasureCraft">
            <div className="relative">
              <Image
                src="https://user-images.githubusercontent.com/77664153/222281911-7bbd782b-83fc-4d37-acc5-bc6fc1be8b70.png"
                width="200"
                height="200"
                className="m-5 rounded-xl"
              />
              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-xl group">
                <p className="hidden group-hover:block">
                  <Image
                    src="https://user-images.githubusercontent.com/77664153/222215824-61e99c3b-4243-4760-853b-30ed501ddc73.png"
                    width="200"
                    height="200"
                    className="m-5 rounded-xl"
                  />
                </p>
              </div>
            </div>
          </Link>

          <Link href="/products/zincCap">
            <div className="relative">
              <Image
                src="https://user-images.githubusercontent.com/77664153/222281913-00374a4a-38f1-40c9-b6cf-fc4f82627b68.png"
                width="200"
                height="200"
                className="m-5 rounded-xl"
              />
              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-xl group">
                <p className="hidden group-hover:block">
                  <Image
                    src="https://user-images.githubusercontent.com/77664153/222214492-7f878efc-9be3-497c-890c-981d6e0f9d62.png"
                    width="200"
                    height="200"
                    className="m-5 rounded-xl"
                  />
                </p>
              </div>
            </div>
          </Link> */}


<Link href="/products/commercial">
            <div className="relative">
              <Image
                src="https://user-images.githubusercontent.com/77664153/222294003-89b287be-9a93-44a4-955e-872676633832.png"
                width="200"
                height="200"
                className="m-5 rounded-xl"
              />
              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-xl group">
                <p className="hidden group-hover:block">
                  <Image
                    src="https://user-images.githubusercontent.com/77664153/222294004-a4f469fa-4dec-4741-a319-e4272b758032.png"
                    width="200"
                    height="200"
                    className="m-5 rounded-xl"
                  />
                </p>
              </div>
            </div>
          </Link>

          <Link href="/products/pleasureCraft">
            <div className="relative">
              <Image
                src="https://user-images.githubusercontent.com/77664153/222294007-44f33fa7-5d32-4b6d-9cba-3e8ffb30526c.png"
                width="200"
                height="200"
                className="m-5 rounded-xl"
              />
              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-xl group">
                <p className="hidden group-hover:block">
                  <Image
                    src="https://user-images.githubusercontent.com/77664153/222294009-8e220790-7a68-47b3-8f82-3f6209eb9efa.png"
                    width="200"
                    height="200"
                    className="m-5 rounded-xl"
                  />
                </p>
              </div>
            </div>
          </Link>

          <Link href="/products/zincCap">
            <div className="relative">
              <Image
                src="https://user-images.githubusercontent.com/77664153/222497524-34cea9df-3134-4d04-be46-a8da13df7416.png"
                width="200"
                height="200"
                className="m-5 rounded-xl"
              />
              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-xl group">
                <p className="hidden group-hover:block">
                  <Image
                    src="https://user-images.githubusercontent.com/77664153/222496861-bab7a987-f244-4c02-b59a-4ab1bf53dbe2.png"
                    width="200"
                    height="200"
                    className="m-5 rounded-xl"
                  />
                </p>
              </div>
            </div>
          </Link>



        </div>
      </div>
    </>
  );
}

{
  /* <Hero heading="Don't let CORROSION eat into your investment" message='Demand Reliance Anodes' /> */
}
