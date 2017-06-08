import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
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
            <ScrollAnimation animateIn="slideInRight" offset={-100}>
              <h1 className="title">{title}</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInRight" offset={-100}>
              <div className="hrf-content">{content}</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="tada" delay={0} offset={0}>
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
