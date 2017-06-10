import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';
import './HalfImageHalfTextLeft.css'

export class HalfImageHalfTextLeft extends React.Component {

  render() {
    const { title, content, imageUrl, buttonUrl, backgroundColor, id } = this.props
    const imageStyle = {
      backgroundImage: `url('${imageUrl}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',

    }
    const left = {
      backgroundColor: backgroundColor
    }
    return (
      <div id={id}>
        <div className="half-container">
          <div className="left" style={left}>
            <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" offset={-100}>
              <div className="title">{title}</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" offset={-100}>
              <div className="content-image-left">{content}</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="tada" animateOut="slideOutLeft" delay={0} offset={0}>
              <div className="button-container">
                { buttonUrl ? <Link to={buttonUrl} className="button">SAIBA MAIS</Link> : null}
              </div>
            </ScrollAnimation>
          </div>
          <div className="image-text-left" style={imageStyle}>
          </div>
        </div>
      </div>
    )
  }
}
