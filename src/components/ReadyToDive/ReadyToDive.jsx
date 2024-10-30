import React from 'react'
import Container from '../Container/Container'
import { SVG } from '../../assets/images';
import NameBox from '../NameBox/NameBox';
import { cities } from '../../Constraints/Constraints';
import RequirementsComponent from '../RequirementsComponent/RequirementsComponent';

const ReadyToDive = () => {
  return (
    <section className='w-full h-full bg-white py-24'>
        <Container>
            <div className='w-full h-full flex flex-col justify-between items-center gap-8 xl:flex-row pb-20'>
                <div className='w-full xl:w-[45%] flex flex-col gap-8 '>
                    <h1 className='text-[37px] font-bold leading-[40px]'>Ready to dive into <span className='text-[#271555]'>HABOT?</span></h1>
                    <p className='text-[17px] font-light leading-[28px]'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                    <button type='submit' className='max-w-[317px] h-[54px] rounded-[5px] border-[1px] border-[#00732F] bg-[#00732F] text-white text-[18px] font-bold text-center relative'>Sign up Today !<img src={SVG.RIGHTARROW} alt="" width={32} height={16} className='absolute top-5 right-5'/></button>
                </div>
                <div className='w-full xl:w-[45%] min-h-[244px] flex flex-wrap justify-center items-center gap-5'>
                {
                  cities.map((city , index) =>
                  (
                    <NameBox key={index}>
                        {city}
                    </NameBox>
                  ))
                }
                 
                </div>
            </div>
            <RequirementsComponent/>
        </Container>
        
    </section>
  )
}

export default ReadyToDive