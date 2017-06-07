import React from 'react'
import './BouncingArrow.css'


export const BouncingArrow = (props) => {
  return (
    <div className="bouncing-button">
      <a href="" onClick={(event) => {
          event.preventDefault()
          window.scroll(0,900) 
        }
      }>
        <i className="fa fa-angle-down bouncing-arrow animated bounce infinite">
        </i>
      </a>
    </div>
  )

}
