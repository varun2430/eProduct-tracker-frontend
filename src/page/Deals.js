import React from 'react'
import ProductGrid from '../component/ProductGrid'

const Deals = () => {
  return (
    <>
        <div className="container-fluid px-3">
        
            <input className="form-control my-4" type="text" placeholder="Search..." />

            <ProductGrid />

        </div>
    </>
  )
}

export default Deals