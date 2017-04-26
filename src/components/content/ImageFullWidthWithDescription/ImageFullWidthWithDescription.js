import React from 'react'
import './ImageFullWidthWithDescription.css'

export class ImageFullWidthWithDescription extends React.Component {

  render() {
    const { imageUrl, title, textContent, buttonUrl } = this.props;
    const imageContainer = {
      background: `url('${imageUrl}') no-repeat center right`,
      width: '100%',
      height: '600px',
      backgroundSize: '100% auto',
      filter: 'brightness(0.8)',

    }
    return (
      <div>
        <div style={imageContainer}>
          <div className="text-content">
            {textContent}
          </div>
        </div>
      </div>
    )
  }
}
