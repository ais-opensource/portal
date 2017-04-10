import React from 'react'
import './HalfImageHalfTextLeft.css'

export class HalfImageHalfTextLeft extends React.Component {

  render() {
    const { title, content, imageUrl, imageDescription, buttonUrl, backgroundColor } = this.props
    const imageStyle = {
      width: "50%",
      height: "600px",
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
            <span className="content-image-left">{content}</span>
            <div className="button-container">
              { buttonUrl ? <a href={buttonUrl} className="button">SAIBA MAIS</a> : null}
            </div>
          </div>
          <div className="right" style={imageStyle}>
          </div>
        </div>
      </div>
    )
  }
}
