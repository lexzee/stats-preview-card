import React from 'react'

const Comp = ({head, det}) => {
  return (
    <div className="stat">
      <h2 className='statHead'>
        {head}
      </h2>
      <p className='statDet'>
        {det}
      </p>
    </div>
  )
}

export default Comp