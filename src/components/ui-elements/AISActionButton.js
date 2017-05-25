import React from 'react'
import './AISActionButton.css'
export class AISActionButton extends React.Component {

  render() {
    return (
      <button className="ais-action-button">{this.props.text}</button>
    )
  }
}
