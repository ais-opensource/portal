import React from 'react'
import './VideoFullWidth.css'


export class VideoFullWidth extends React.Component {

  render() {
    const { mp4Url, webmUrl } = this.props
    return (
      <div>
      <div className="video-container">
        <video id="bgvid" playsInline autoPlay muted loop>
          <source src={webmUrl} type="video/webm" />
          <source src={mp4Url} type="video/mp4" />
        </video>
        <div className="video-children-container">
          {this.props.children}
        </div>
      </div>
      </div>
    )
  }
}
