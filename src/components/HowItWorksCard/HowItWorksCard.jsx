import React from 'react'
import { SVG } from '../../assets/images'

const HowItWorksCard = ({icon , desc}) => {
  return (
    <div className='w-[280px] sm:w-[400px] min-h-[254px] flex flex-col justify-start items-center gap-8 py-10  odd:bg-[#E8FBFF] even:bg-white'>
        <img src={icon} alt="" className='w-[74px] h-[74px]'/>
        <p className='text-[20px] font-medium text-center w-[250px] '>
        {desc}
        </p>
    </div>
  )
}

export default HowItWorksCard