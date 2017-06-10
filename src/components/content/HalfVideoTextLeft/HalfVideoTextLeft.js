import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
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
            <ScrollAnimation animateIn="slideInLeft"  animateOut="slideOutLeft" offset={-100}>
              <div className="title-video-left">{title}</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInLeft" offset={-100} animateOut="slideOutLeft">
              <div className="content-video-left">{content}</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="tada" delay={0} offset={0} animateOut="slideOutLeft">
              <div className="button-container">
                <a href={buttonUrl} className="button">SAIBA MAIS</a>
              </div>
            </ScrollAnimation>
          </div>
          <div className="right">
            <iframe className="video" src={videoUrl}  frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}
