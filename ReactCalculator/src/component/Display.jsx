import React from 'react'
import '../App.css'

const Display = ({inputData}) => {
  return (
    <div className="display-container">
      <input type="text" value={inputData} />
    </div>
  )
}

export default Display
