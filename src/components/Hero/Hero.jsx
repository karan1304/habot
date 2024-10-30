import React from 'react'
import Container from '../Container/Container'
import Styles from '../../styles/components/Hero/hero.module.css';
import { SVG } from '../../assets/images';

const Hero = () => {
  return (
    <section id="#hero" className={`${Styles.hero} w-[100%] h-[700px] md:h-[609px]`}>
        <Container>
            <div className='w-full h-full flex flex-col justify-center items-center gap-10'>
                <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='text-3xl sm:text-[55px] font-bold text-white leading-[50px] sm:leading-[66px] text-center'>Are You a Supplier?</h1>
                <h2 className='text-4xl sm:text-[55px] font-normal text-white  leading-[45px] sm:leading-[66px] text-center'>Explore Matching Opportunities.</h2>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 lg:flex-row'>
                    <div className='max-w-[400px] sm:w-[400px] h-[56px] rounded-[5px] border-[1px] border-[#D1D5DB] bg-white flex justify-start items-center gap-4 px-5'>
                        <img src={SVG.SERVICELOGO} alt="" className='w-[20px] h-[20px]'/>
                        <input type="text"  placeholder='search your required service here' className='w-full placeholder:text-[#6B7280] placeholder:font-light border-none outline-none'/>
                    </div>
                    <div className='max-w-[400px] sm:w-[400px] h-[56px] rounded-[5px] border-[1px] border-[#D1D5DB] bg-white flex justify-start items-center gap-4 px-5'>
                        <img src={SVG.LOCATIONLOGO} alt="" className='w-[20px] h-[20px]'/>
                        <input type="text" placeholder='search your desired location here' className='w-full placeholder:text-[#6B7280] placeholder:font-light border-none outline-none'/>
                    </div>
                    <button type="submit" className='w-[117px] h-[54px] rounded-[5px] border-[1px] border-[#00732F] bg-[#00732F] text-white text-center font-bold text-base'>Search</button>
                </div>
                <p className='text-white text-[16px] sm:text-[18px] font-bold text-center'>
                Are you a buyer?   
                <a href="" className='underline px-3 font-normal'>Click here if you are looking to post a requirements</a>
                </p>
            </div>
        </Container>
    </section>
  )
}

export default Hero