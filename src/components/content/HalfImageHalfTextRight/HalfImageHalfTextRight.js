import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import './HalfImageHalfTextRight.css'

export class HalfImageHalfTextRight extends React.Component {

  render() {
    const { title, content, imageUrl, buttonUrl, backgroundColor, id } = this.props
    const imageStyle = {
      backgroundImage: `url('${imageUrl}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',


    }
    const right = {
      backgroundColor: backgroundColor
    }
    return (
      <div>
        <div className="row half-container-right" id={id}>
          <div style={imageStyle} className="image-text-right">
          </div>
            <div className="right" style={right}>
              <ScrollAnimation animateIn="slideInRight" offset={-100}>
                <div className="title">{title}</div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="slideInRight" delay={1000}  offset={0}>
                <div className="content">{content}</div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="tada" delay={0} offset={0}>
                <div className="button-container-right">
                  {buttonUrl ? <Link to={buttonUrl} className="button">SAIBA MAIS</Link> : null}
                </div>
              </ScrollAnimation>
            </div>
        </div>
      </div>
    )
  }
}
