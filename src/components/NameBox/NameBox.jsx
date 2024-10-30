import React from 'react'

const NameBox = ({children}) => {
  return (
    <div className='w-[260px] h-[65px] rounded-[5px] border-[1px] border-[#E7760D] bg-white flex justify-center items-center text-[18px] leading-[32px] font-medium'>
         {children}
    </div>
  )
}

export default NameBox