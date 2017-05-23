import React from 'react'
import './ImageFullWidthWithDescription.css'
import {  BouncingArrow } from '../BouncingArrow/BouncingArrow'

export class ImageFullWidthWithDescription extends React.Component {

  render() {
    const { imageUrl, textContent, title } = this.props;
    const imageContainer = {
      background: `url('${imageUrl}') no-repeat center right`,
      width: '100%',
      backgroundSize: '100% auto',
      filter: 'brightness(0.8)',

    }
    return (
      <div >
        <div className="image-full-width-container" style={imageContainer}>
          <div className="title-content animated bounceInLeft">
            {title}
          </div>
          <div className="text-content">{textContent}</div>
          <BouncingArrow />
        </div>
      </div>
    )
  }
}
