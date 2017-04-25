import React from 'react'
import './ImageFullWidth.css'

export class ImageFullWidth extends React.Component {


  render() {
    const { imageUrl } = this.props
    return (
      <div >
        <img src={imageUrl} className="full-width-image-container" alt="imagem completa"/>
      </div>
    )
  }
}
