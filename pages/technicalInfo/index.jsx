import Hero from '@/components/Hero'
import React from 'react'
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center">
        <Hero heading={"Technical Information"} img={"bg-img1"} />
      </div>
      <div className="bg-white flex flex-col justify-center items-center mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Link href="/products/commercial">
            <div className="relative">
              <Image
                src="/tech/tech-info1A.png"
                width="300"
                height="300"
                className="m-5 rounded-xl"
              />
              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-xl group">
                <p className="hidden group-hover:block">
                  <Image
                    src="/tech/tech-info1B.png"
                    width="300"
                    height="300"
                    className="m-5 rounded-xl"
                  />
                </p>
              </div>
            </div>
          </Link>

          <Link href="/products/pleasureCraft">
            <div className="relative">
              <Image
                src="/tech/tech-info2A.png"
                width="300"
                height="300"
                className="m-5 rounded-xl"
              />
              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-xl group">
                <p className="hidden group-hover:block">
                  <Image
                    src="/tech/tech-info2B.png"
                    width="300"
                    height="300"
                    className="m-5 rounded-xl"
                  />
                </p>
              </div>
            </div>
          </Link>

          <Link href="/technicalInfo/zincCap">
            <div className="relative">
              <Image
                src="/tech/tech-info3A.png"
                width="300"
                height="300"
                className="m-5 rounded-xl"
              />
              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-xl group">
                <p className="hidden group-hover:block">
                  <Image
                    src="/tech/tech-info3B.png"
                    width="300"
                    height="300"
                    className="m-5 rounded-xl"
                  />
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>

  )
}

export default index