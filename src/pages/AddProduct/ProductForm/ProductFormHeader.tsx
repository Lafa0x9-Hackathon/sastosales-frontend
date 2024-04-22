import React from 'react'

const ProductFormHeader = ({ children }) => {
  return (
    <header style={{
      background: "linear-gradient(95.05deg, #FFE2E2 6.01%, #D5C7FF 100.09%)"

    }} className='py-2 px-5 text-xl font-bold text-[#333]'>
      {children}
    </header>
  )
}

export default ProductFormHeader