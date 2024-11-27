import Hero from '@/components/Hero'
import React from 'react'
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center">
        <Hero 
        heading={"Technical Information"}
        message={"See our resorces below to help you get started on your corrosion control journey"}
        img={"bg-img1"} />
      </div>

      <div className="bg-white flex flex-col justify-center items-center mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <Link href="/technicalInfo/milSpec">
            <div className="relative">
              <Image
                src="/tech/milspec-1.png"
                width="300"
                height="300"
                className="mx-[10vw] my-[10vw] lg:mx-[5vw] lg:my-[10vw] rounded-xl"
              />
              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-xl group">
                <p className="hidden group-hover:block">
                  <Image
                    src="/tech/milspec-2.png"
                    width="300"
                    height="300"
                    className="mx-[10vw] my-[10vw] lg:mx-[5vw] lg:my-[10vw] rounded-xl"
                  />
                </p>
              </div>
            </div>
          </Link>

          <Link href="/technicalInfo/protection">
            <div className="relative">
              <Image
                src="/tech/protect-1.png"
                width="300"
                height="300"
                className="mx-[10vw] my-[10vw] lg:mx-[5vw] lg:my-[10vw] rounded-xl"
              />
              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-xl group">
                <p className="hidden group-hover:block">
                  <Image
                    src="/tech/protect-2.png"
                    width="300"
                    height="300"
                    className="mx-[10vw] my-[10vw] lg:mx-[5vw] lg:my-[10vw] rounded-xl"
                  />
                </p>
              </div>
            </div>
          </Link>

          <Link href="/technicalInfo/faq">
            <div className="relative">
              <Image
                src="/tech/faq-1.png"
                width="300"
                height="300"
                className="mx-[10vw] my-[10vw] lg:mx-[5vw] lg:my-[10vw] rounded-xl"
              />
              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-xl group">
                <p className="hidden group-hover:block">
                  <Image
                    src="/tech/faq-2.png"
                    width="300"
                    height="300"
                    className="mx-[10vw] my-[10vw] lg:mx-[5vw] lg:my-[10vw] rounded-xl"
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