import React from 'react'
import './VideoFullWidth.css'


export class VideoFullWidth extends React.Component {

  render() {
    const { videoUrl, buttonUrl } = this.props
    return (
      <div>
        <div className="video-full-video-container">
          <iframe className="video-full-video" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="video-full-button-container">
          <a href={buttonUrl} className="video-full-button">SAIBA MAIS</a>
        </div>
      </div>
    )
  }
}
