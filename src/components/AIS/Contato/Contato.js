import React from 'react'
import { ImageFullWidthWithDescription } from '../../content/ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { RedesSociais } from '../RedesSociais/RedesSociais'
import { ContatoForm } from './ContatoForm'
import './Contato.css'

export class Contato extends React.Component {

  render() {
    return (
      <div id="contato">
        <ImageFullWidthWithDescription
          imageUrl='./contato.jpg'
          title='Entre em contato'
          textContent='Vamos transformar sua ideia em realidade'
        />
        <RedesSociais />
        <ContatoForm />
      </div>
    )
  }

}
