import React from 'react'
import * as ReactGA from 'react-ga'
import './AISActionButton.css'
export class AISActionButton extends React.Component {

handleClickEvent(eventName, event) {

   ReactGA.event({
     category: 'Ação de Botão',
     action: eventName
   })
}

  render() {
    const url = this.props.url ? this.props.url : '#' + this.props.id
    return (
      <a href={url} onClick={this.handleClickEvent.bind(this, this.props.eventType)} className="ais-action-button">{this.props.text}</a>
    )
  }
}
