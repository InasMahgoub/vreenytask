import React from 'react'
import HomeProducts from './products/HomeProducts'

export default function Layout() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
            {/* <div className='col-md-3 side-menu fixed'>
                <CategoriesList />
            </div> */}
            <div className='col-md-12'>
                <HomeProducts />
            </div>
        </div>
      </div>
      
    </div> 
  )
}
