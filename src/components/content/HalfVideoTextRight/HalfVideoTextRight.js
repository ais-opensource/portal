import React from 'react'
import './HalfVideoTextRight.css'

export class HalfVideoTextRight extends React.Component {

  render() {
    const { title, content, videoUrl, buttonUrl, buttonText } = this.props
    const right ={
      backgroundColor: this.props.backgroundColor,
    }

    return (
      <div>
        <div className="row half-container">
          <div className="right">
            <iframe className="video" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="left" style={right}>
            <h1 className="title">{title}</h1>
            <div className="hrf-content">{content}</div>
            <div className="button-container">
              <a href={buttonUrl} className="button">{buttonText}</a>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
