import React from 'react'
import './AISActionButton.css'
export class AISActionButton extends React.Component {

  render() {
    const url = this.props.url ? this.props.url : '#' + this.props.id
    return (
      <a href={url} className="ais-action-button">{this.props.text}</a>
    )
  }
}
