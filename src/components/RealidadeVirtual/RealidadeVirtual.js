import React from 'react'
import { PageTitle } from '../content/PageTitle/PageTitle'
import { HalfImageHalfTextLeft } from '../content/HalfImageHalfTextLeft/HalfImageHalfTextLeft'
import { HalfImageHalfTextRight } from '../content/HalfImageHalfTextRight/HalfImageHalfTextRight'
import { ImageFullWidthWithDescription } from '../content/ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { HalfVideoTextLeft } from '../content/HalfVideoTextLeft/HalfVideoTextLeft'

import './RealidadeVirtual.css'

export class RealidadeVirtual extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <PageTitle title="Realidade Virtual" />
          <HalfVideoTextLeft
            backgroundColor="#7B3B3B"
            videoUrl='https://www.youtube.com/embed/_2rwrEFiP20'
            title='Promoções Turísticas'
            buttonUrl='http://www.pascoavirtual.com.br'
            content='Possibilite a emoção de passeios turísticos mesmo à distância'
          />
          <HalfImageHalfTextRight
            title='Maquetes Virtuais'
            imageUrl='./maquetevirtual.jpg'
            imageDescription="Maquetes Virtuais"
            content='Apresentação de modelos 3D executados em tempo real'
            buttonUrl='/realidade-virtual/maquetes-virtuais'
            backgroundColor="#7B3B3B"
          />
          <HalfImageHalfTextLeft
            title='Jogos Publicitários'
            imageUrl='./jogos-publicitarios.jpeg'
            imageDescription="Jogos Publicitários"
            content='Relacione sua marca com sensações que intensifiquem o consumo'
            buttonUrl='/realidade-virtual/jogos-publicitarios'
            backgroundColor="#493736"
          />
          <HalfImageHalfTextRight
            title='Conteúdo Educativo Imersivo'
            imageUrl='./educativo-imersivo.jpeg'
            imageDescription="Conteúdo Educativo Imersivo"
            content='Plataforma de ensino que utiliza-se de realidade virtual'
            buttonUrl='/realidade-virtual/educativo'
            backgroundColor="#7B3B3B"
          />
        <div className="rv-container">
          <ImageFullWidthWithDescription
            imageUrl={'./jogos-serios.jpeg'}
            title='JOGOS SÉRIOS'
            buttonUrl='#'
          />
        </div>
      </div>
    )
  }
}
