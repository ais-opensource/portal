import React from 'react'
import { Link } from 'react-router-dom'
import './HalfImageHalfTextLeft.css'

export class HalfImageHalfTextLeft extends React.Component {

  render() {
    const { title, content, imageUrl, imageDescription, buttonUrl, backgroundColor } = this.props
    const imageStyle = {
      backgroundImage: `url('${imageUrl}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }
    const left = {
      backgroundColor: this.props.backgroundColor
    }
    return (
      <div className="container-fluid">
        <div className="row half-container">
          <div className="left" style={left}>
            <h1 className="title">{title}</h1>
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
