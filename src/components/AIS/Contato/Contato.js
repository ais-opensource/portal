import React from 'react'
import { ImageFullWidthWithDescription } from '../../content/ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { AISHelmet } from '../../utilities/AISHelmet/AISHelmet'
import { RedesSociais } from '../RedesSociais/RedesSociais'
import { ContatoForm } from './ContatoForm'
import './Contato.css'

export class Contato extends React.Component {

  render() {
    const imageUrl='http://www.ambientesvirtuais.com/contato.jpg'
    const title='Entre em contato'
    const textContent='Vamos transformar sua ideia em realidade'
    return (
      <div id="contato">
        <AISHelmet
          imageContent={imageUrl}
          title={title}
          description={textContent}
          url='http://www.ambientesvirtuais.com/quem-somos'
        />
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
