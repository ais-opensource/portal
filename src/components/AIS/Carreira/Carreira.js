import React from 'react'
import './Carreira.css'


export class Carreira extends React.Component {
  _renderVagas() {
    const vagas = [
      {
        name: 'CGI Artist'
      },
      {
        name: 'Game Engineer - Unity'
      },
      {
        name: 'VR Expert - (Web VR, Unity, PSVR)'
      },
    ]
    return vagas.map((vaga, index) => {
      return (
        <div className="vaga">
          { vaga.name } <button className="apply-button">CANDIDATAR-SE</button>
        </div>
      )
    })
  }
  render() {

    return (
      <div className="carreira-container">
        <span className="sem-vagas">No momento não temos nenhuma vaga disponível. Tente mais tarde.</span>
      </div>
    )
  }
}
