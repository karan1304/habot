import React from 'react'
import { SVG } from '../../assets/images'
import Container from '../Container/Container'

const Navbar = () => {
  return (
    <nav className='bg-white border-b-2 border-gray-600'>
   <Container>
    <div className='flex flex-col justify-between  py-5 gap-4 lg:flex-row'>
        <img src={SVG.LOGO} alt="" className='w-[181px] h-[43px]'/>
        <div className='flex flex-col justify-end items-start gap-8 sm:flex-row sm:items-center'>
            <a href="" className='no-underline text-sm font-normal text-[rgba(109,110,113,1)]'>Find Suppliers</a>
            <a href="" className='no-underline text-sm font-normal text-[rgba(109,110,113,1)]'>Find Service Tags</a>
            <button type="submit" className='w-[193px] h-[50px] border-[1px] border-[#00732fff] rounded-[5px] text-center text-sm font-bold text-[#00732fff]'>Login/Sign Up</button>
        </div>
    </div>
    </Container>
    </nav>
  )
}

export default Navbar