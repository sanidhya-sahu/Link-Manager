import React from 'react'
import './header.css'
export default function header(props) {
  const headerStyle = {}
  return (
    <div className='main'>
      <div style={headerStyle} className='submain'>
        <h1 style={headerStyle}>
          {
            props.data
          }
        </h1>
      </div>
      <div className="subdiv"></div>
    </div>
  )
}
