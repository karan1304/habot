
import Container from '../Container/Container'
import { SVG } from '../../assets/images'
import { list, socailicons} from '../../Constraints/Constraints'


const Footer = () => {
  return (
    <section className='bg-[#123557] py-10'>
        <Container>
            <div className='flex flex-col gap-10 justify-between items-center lg:flex-row lg:gap-0 max-w-[1200px] mx-auto my-0 py-10 border-b-[1px] border-t-[1px] border-[#ffffff20]'>
                <div className='flex flex-col justify-center items-center gap-10 md:flex-row'>
                    <div className='h-full flex flex-col gap-4 '>
                        <img src={SVG.LOGODARK} alt="" className='w-[206px] h-[40px] object-contain'/>
                        <p className='px-2 text-base font-light text-white'>&copy; R Signhania</p>
                    </div>
                    
                    <div className='w-full flex flex-wrap justify-center items-start gap-4'>
                        {
                            list.map((item,index)=>(
                                <div key={index}>
                                    <h1 className='text-[15px] font-bold text-white'>{item.title}</h1>
                                    <ul className='flex flex-col gap-3 mt-5'>
                                    {
                                        item.links.map((link,index)=>(
                                             <li key={index} className='text-sm font-light text-white'>{link}</li>
                                        ))
                                    }
                                    </ul>
                                </div>
                            ))
                            
                        }
                        
                    </div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                        {
                           socailicons.map((item,index)=>(
                            <div key={index}className='w-[40px] h-[40px] flex justify-center items-center border-[1px] border-[#ffffff20] rounded-full'>
                                <img src={item.icon} alt="" className='w-[18px] h-[18px]'/>
                            </div>
                           )) 
                           }
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Footer