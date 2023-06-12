import React from 'react'

const Comp = ({head, det}) => {
  return (
    <div className="comp">
      <h2>
        {head}
      </h2>
      <p>
        {det}
      </p>
    </div>
  )
}

export default Comp