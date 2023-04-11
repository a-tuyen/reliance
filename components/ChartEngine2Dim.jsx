import React from 'react'

const ChartEngine2Dim = ({
    itemCode,
    itemLb,
    itemKg,
    unc
}) => {
  return (
    <>
    <tr>
        <td>{itemCode}</td>
        <td className="border-r-0">
          <div className="flex flex-col md:flex-row justify-center items-center px-1">
            <div>{itemLb}</div>
            <div className="pl-2">{itemKg}</div>
          </div>
        </td>
        <td>{unc}</td>
    </tr>
    </>
  )
}

export default ChartEngine2Dim