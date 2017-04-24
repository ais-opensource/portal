import React from 'react'
import './ImageFullWidthWithDescription.css'

export class ImageFullWidthWithDescription extends React.Component {

  render() {
    const { imageUrl, title, textContent, buttonUrl } = this.props;
    const imageContainer = {
      background: `url('${imageUrl}') no-repeat`
    }
    return (
      <div >
        <div style={imageContainer} className="image-full-container">
          <div className="text-container-title animated bounceInLeft">{title}</div>
            <div className="text-container-content">
              {textContent}
            </div>
          <div className="button-container-full">
            {buttonUrl ? <a href={buttonUrl} className="button-full">SAIBA MAIS</a> : null}
          </div>
        </div>
      </div>
    )
  }
}
