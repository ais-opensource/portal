import React from 'react'
import { Contato } from './Contato/Contato'
import './AIS.css'

export class AIS extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  _renderEquipeAIS() {

  }
  render() {
    return (
      <div id="contato">
        <Contato />
      </div>
    )
  }
}
