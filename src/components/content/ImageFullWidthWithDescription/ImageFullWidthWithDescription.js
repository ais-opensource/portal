import React from 'react'
import './ImageFullWidthWithDescription.css'

export class ImageFullWidthWithDescription extends React.Component {

  render() {
    const { imageUrl, textContent } = this.props;
    const imageContainer = {
      background: `url('${imageUrl}') no-repeat center right`,
      width: '100%',
      height: '600px',
      backgroundSize: '100% auto',
      filter: 'brightness(0.8)',

    }
    return (
      <div >
        <div className="image-full-width-container" style={imageContainer}>
          <div className="text-content animated bounceInLeft">
            {textContent}
          </div>
        </div>
      </div>
    )
  }
}
