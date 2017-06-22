import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import './HalfVideoTextRight.css'

export class HalfVideoTextRight extends React.Component {

  render() {
    const { title, content, videoUrl, buttonUrl, buttonText } = this.props
    const backgroundColor ={
      backgroundColor: this.props.backgroundColor,
    }

    return (
      <div>
        <div className="row half-container">
          <div className="right">
            <iframe className="video" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="right-video-right" style={backgroundColor}>
            <ScrollAnimation animateIn="slideInRight" offset={-100} animateOut="slideOutRight">
              <h1 className="title">{title}</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInRight" offset={-100} animateOut="slideOutRight">
              <div className="hrf-content">{content}</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="tada" delay={0} offset={0} animateOut="slideOutRight">
              <div className="button-container">
                <a href={buttonUrl} className="button">{buttonText}</a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    )
  }
}
