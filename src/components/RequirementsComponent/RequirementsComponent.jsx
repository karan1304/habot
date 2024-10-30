import React, { useState } from 'react'
import { SVG } from '../../assets/images'

const RequirementsComponent = () => {
    const [active ,setActive] = useState('buyer');
    const activeStyle= {
        borderBottom: '4px solid #EB7150',
        color:'#EB7150',
        transition:'all 0.5 ease-in-out 0.1'
        
    }
    
    const handleActive = (e)=>
    {
        if(active === 'buyer')
         setActive('supplier');
        else
         setActive('buyer');
    }

  return (
    <div className='w-full h-full bg-[#072F57] flex justify-center items-center flex-col xl:flex-row py-20 px-2 sm:px-8 lg:px-16'>
        <div className='w-full xl:w-1/2 h-[400px]  flex justify-center items-center'>
            <div className='w-[640px] h-[350px] relative flex justify-center items-center'>
                <img src={SVG.VIDEO} alt="" className='w-full h-full'/>
                <img src={SVG.YOUTUBE} alt="" className='w-[86px] h-[55px] sm:w-[106px] sm:h-[75px] absolute'/>
            </div>
        </div>
        <div className='w-full xl:w-1/2 min-h-[400px] flex flex-col gap-10 py-8 px-10'>
            <div className='flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-8'>
                <h1 className='w-[202px] h-[47px] flex justify-center items-center text-[26px] font-bold text-white py-4 cursor-pointer' style={active==='buyer'?activeStyle:{}} onClick={(e)=>handleActive(e)}>Buyer</h1>
                <h1 className='w-[202px] h-[47px] flex justify-center items-center text-[26px] font-bold text-white cursor-pointer' style={active==='supplier'?activeStyle:{}} onClick={(e)=>handleActive(e)}>Supplier</h1>
            </div>
            <ul className='flex flex-col justify-start items-start gap-4 max-w-[461px]'>
            <li className='flex justify-center items-start gap-3 '><img src={SVG.TICK} alt="" className='w-[18px] h-[18px] my-1'/><p className='font-medium text-[18px] text-white '>Post your requirements.</p></li> 
            <li className='flex justify-center items-start gap-3 '><img src={SVG.TICK} alt="" className='w-[18px] h-[18px] my-1'/><p className='font-medium text-[18px] text-white'>Sit back for multiple suppliers to contact you.</p></li> 
            <li className='flex justify-center items-start gap-3 '><img src={SVG.TICK} alt="" className='w-[18px] h-[18px] my-1'/><p className='font-medium text-[18px] text-white'>Choose among the suppliers based on the ratings and reviews</p></li> 
            </ul>
        </div>
    </div>
  )
}

export default RequirementsComponent