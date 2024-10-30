import React from 'react'
import Container from '../Container/Container'
import { cardsData } from '../../Constraints/Constraints'
import HowItWorksCard from '../HowItWorksCard/HowItWorksCard'

const HowItWorks = () => {
  return (
   <section >
        <Container>
            <div className='flex flex-col justify-center items-center gap-10 py-20'>
                <h1 className='text-[37px] font-bold text-center text-[#222222]'>How it works?</h1>
                <p className='max-w-[839px] text-center text-[17px] font-normal leading-[26px]'>
                Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
                </p>
                <div className='max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 my-10 '>
                    {
                        cardsData.map((data, index) =>(
                            <HowItWorksCard key={index} icon={data.icon} desc={data.description}/>
                        ))
                    }
                </div>
            </div>
        </Container>
   </section>
  )
}

export default HowItWorks