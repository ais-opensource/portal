import React from 'react'
import './HalfVideoTextLeft.css'

export class HalfVideoTextLeft extends React.Component {

  render() {
    const { title, content, videoUrl, buttonUrl } = this.props
    const left = {
      backgroundColor: this.props.backgroundColor,
    }
    return (
      <div >
        <div className="half-container">
          <div className="left" style={left}>
            <div className="title-video-left">{title}</div>
            <div className="content-video-left">{content}</div>
            <div className="button-container">
              <a href={buttonUrl} className="button">SAIBA MAIS</a>
            </div>
          </div>
          <div className="right">
            <iframe className="video" src={videoUrl}  frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}
