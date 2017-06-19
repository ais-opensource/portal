import React from 'react'
import './VideoFullWidth.css'


export class VideoFullWidth extends React.Component {

  render() {
    const { videoUrl, buttonUrl } = this.props
    return (
      <div>
      <div className="video-container">
        <video id="bgvid" playsInline autoPlay muted loop>
          <source src='./outdoor-virtual.webm' type="video/webm" />
          <source src='./outdoor-virtual.mp4' type="video/mp4" />
        </video>
        <div className="video-children-container">
          {this.props.children}
        </div>
      </div>
      </div>
    )
  }
}
