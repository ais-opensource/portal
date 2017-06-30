import React from 'react'
import './Vantagens.css'

export class Vantagens extends React.Component {

  renderVantagens() {

    return this.props.vantagens.map((vantangem, index) => {
      const thumbStyle = {
        backgroundImage: `url('${vantangem.thumb}')`,
      }
      return (
        <div className="vantagem-container" key={index}>
          <div style={thumbStyle} className="thumb-container">
          </div>
          <div className="vantagem-title-container">
            {vantangem.title}
          </div>
          <div className="vantagem-text-container">
            {vantangem.text}
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="vantagens-container">
        {this.renderVantagens()}
      </div>
    )
  }
}
