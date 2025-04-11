import React from 'react'

const FaqItem = ({question, answer}) => {
  return (

    <details className="border border-gray-200 rounded-md p-4">
    <summary className="font-semibold text-gray-800 cursor-pointer">{question}</summary>
    <p className="mt-2 text-gray-700">{answer}</p>
  </details>

  )
}

export default FaqItem