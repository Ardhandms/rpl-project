import React from 'react'

function SectionHeader({subHeader, mainHeader}) {
  return (
    <div>
      <h3 className='uppercase text-grey-500 font-semibold leading-4'>
          {subHeader}
      </h3>
      <h2 className='text-primary font-bold text-4xl italic'>
          {mainHeader}
      </h2>
    </div>
  )
}

export default SectionHeader