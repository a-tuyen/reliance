import React from 'react'

const FaqItem = ({question, answer}) => {
  return (
    <div className='mt-[5%]'>
        <h2>{question}</h2>
        <p>{answer}</p>
    </div>
  )
}

export default FaqItem