import React from 'react'
import { Link } from 'react-router-dom'
import './HalfImageHalfTextRight.css'

export class HalfImageHalfTextRight extends React.Component {

  render() {
    const { title, content, imageUrl, buttonUrl, backgroundColor, id } = this.props
    const imageStyle = {
      backgroundImage: `url('${imageUrl}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'auto',

    }
    const right = {
      backgroundColor: backgroundColor
    }
    return (
      <div>
        <div className="half-container-right" id={id}>
          <div style={imageStyle} className="image-text-right">
          </div>
          <div className="left" style={right}>
            <h1 className="title">{title}</h1>
            <div className="content">{content}</div>
            <div className="button-container-right">
              {buttonUrl ? <Link to={buttonUrl} className="button">SAIBA MAIS</Link> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
