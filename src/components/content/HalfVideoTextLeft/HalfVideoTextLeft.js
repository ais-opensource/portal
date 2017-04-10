import React from 'react'
import './HalfVideoTextLeft.css'

export class HalfVideoTextLeft extends React.Component {

  render() {
    const { title, content, videoUrl, buttonUrl } = this.props
    const left = {
      backgroundColor: this.props.backgroundColor,
      margin: 0,
    }
    return (
      <div className="container-fluid">
        <div className="row half-container">
          <div className="left" style={left}>
            <h1 className="title-video-left">{title}</h1>
            <div className="content-video-left">{content}</div>
            <div className="button-container">
              <a href={buttonUrl} className="button">SAIBA MAIS</a>
            </div>
          </div>
          <div className="right">
            <iframe className="video" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}
