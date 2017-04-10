import React from 'react'
import './HalfImageHalfTextRight.css'

export class HalfImageHalfTextRight extends React.Component {

  render() {
    const { title, content, imageUrl, imageDescription, buttonUrl, backgroundColor } = this.props
    const imageStyle = {
      width: "50%",
      height: "600px",
      backgroundImage: `url('${imageUrl}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'auto',
      marginRight: "-10px",
      marginLeft: "10px"
    }
    const right = {
      backgroundColor: backgroundColor
    }
    return (
      <div className="container-fluid">
        <div className="row half-container">
          <div style={imageStyle}>
          </div>
          <div className="left" style={right}>
            <h1 className="title">{title}</h1>
            <span className="content">{content}</span>
            <div className="button-container">
              {buttonUrl ? <a href={buttonUrl} className="button">SAIBA MAIS</a> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
