import React from 'react'
import Hero from '@/components/Hero'
import SideBarPC from '@/components/SideBarPC'

const spur = () => {
  return (
    <div>
        <Hero
        heading={"Spurs Line Cutter Anodes"}
        message={""}
        img={"bg-img2"}
        />
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
            <SideBarPC />
            <article>
                <main>
                    <table>
                        <tbody>
                            <tr>
                                <th>

                                </th>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </article>
        </div>

    </div>
  )
}

export default spur