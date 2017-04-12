import React from 'react'
import './ImageFullWidthWithDescription.css'

export class ImageFullWidthWithDescription extends React.Component {

  render() {
    const { imageUrl, title, textContent, buttonUrl } = this.props;
    const imageContainer = {
      background: `url('${imageUrl}') no-repeat center`
    }
    return (
      <div style={imageContainer} className="image-full-container">
        <div className="text-container">
          <div className="text-container-title">{title}</div>
          <div>
            <p className="text-container-content">
              {textContent}
            </p>
          </div>
          <div className="button-container-full">
            <a href={buttonUrl} className="button-full">SAIBA MAIS</a>
          </div>
        </div>
      </div>
    )
  }
}
