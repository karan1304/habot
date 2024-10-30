import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-[90%] h-full mx-auto my-0'>
        {children}
    </div>
  )
}

export default Container