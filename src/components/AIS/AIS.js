import React from 'react'
import { PageTitle } from '../content/PageTitle/PageTitle'
import { Carreira } from './Carreira/Carreira'
import './AIS.css'

export class AIS extends React.Component {
  _renderEquipeAIS() {
  
  }
  render() {
    return (
      <div>
        <div id="quem-somos">
          <div className="missao">
              <PageTitle title="Missão" />
              <div className="missao-content">
                Nossa missão é desenvolver experiências imersivas únicas que proporcionem sensações que aumentem a predisposição para aprendizagem, consumo e fixação de marca.
              </div>
          </div>
          <div className="equipe">


          </div>
          <div className="carreira" id="carreira">
            <PageTitle title="Carreira" />
            <Carreira />
          </div>
          <div id="contato">
            <PageTitle title='Contato' />
            <div className="contato-content">
              Telefone: <br /> + 55 45 98406 7334
            </div>
            <div className="contato-content-email">
              <a href="mailto:ais.ambientesvirtuais@gmail.com">E-mail: ais.ambientesvirtuais@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
