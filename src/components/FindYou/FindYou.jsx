import Container from '../Container/Container'

const FindYou = () => {
  return (
    <section className='bg-[#E8FBFF]'>
        <Container>
            <div className='py-20 flex flex-col justify-between items-center gap-8 px-16 lg:flex-row'>
                    <p className='text-3xl font-semibold text-center sm:text-[37px]'>Let Suppliers <span className='border-b-4 border-[#EB7150]'>Find You</span></p>
                    <button type='submit' className='w-[216px] h-[54px] rounded-[5px] bg-[#EB7150] font-bold text-white'>Get Verified</button>
            </div>
        </Container>
    </section>
  )
}

export default FindYou