import React from 'react'
import { Link } from 'react-router-dom'
import './HalfImageHalfTextLeft.css'

export class HalfImageHalfTextLeft extends React.Component {

  render() {
    const { title, content, imageUrl, buttonUrl, backgroundColor, id } = this.props
    const imageStyle = {
      backgroundImage: `url('${imageUrl}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '100% auto',
    }
    const left = {
      backgroundColor: backgroundColor
    }
    return (
      <div id={id}>
        <div className="half-container">
          <div className="left" style={left}>
            <div className="title">{title}</div>
            <div className="content-image-left">{content}</div>
            <div className="button-container">
              { buttonUrl ? <Link to={buttonUrl} className="button">SAIBA MAIS</Link> : null}
            </div>
          </div>
          <div className="image-text-left" style={imageStyle}>
          </div>
        </div>
      </div>
    )
  }
}
