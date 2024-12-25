import React from 'react'
import subtractBlack from '../assets/Subtract-black.png'

const Title = () => {
  return (
    <div>
        <div className='flex items-center justify-center gap-3'>
            <img src={subtractBlack} alt="black-logo" />
            <p className='text-3xl font-normal text-privacy-txt'>CodeAnt AI</p>
        </div>
    </div>
  )
}

export default Title