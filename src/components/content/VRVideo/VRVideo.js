import React from 'react';
import './VRVideo.css'
export class VRVideo extends React.Component {

  render() {
    const rawVideoUrl = this.props.match.params.path
    console.log('video url',rawVideoUrl)
    const videoUrl = `https://www.youtube.com/embed/${rawVideoUrl}`
    return (
      <div>
        <iframe className="video" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }
}
