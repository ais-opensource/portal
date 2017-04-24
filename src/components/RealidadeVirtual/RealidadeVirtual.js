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
      <div>
        <PageTitle title="Realidade Virtual" />
          <HalfVideoTextLeft
            backgroundColor="#7B3B3B"
            videoUrl='https://www.youtube.com/embed/_2rwrEFiP20'
            title='Promoções Turísticas'
            buttonUrl='http://www.pascoavirtual.com.br'
            content='Possibilite a emoção de passeios turísticos mesmo à distância'
            id="promocoes-turisticas"
          />
          <HalfImageHalfTextRight
            title='Maquetes Virtuais'
            imageUrl='./maquetevirtual.jpg'
            imageDescription="Maquetes Virtuais"
            content='Apresentação de modelos 3D executados em tempo real'

            backgroundColor="#7B3B3B"
            id="maquetes"
          />
          <HalfImageHalfTextLeft
            title='Jogos Publicitários'
            imageUrl='./jogos-publicitarios.jpeg'
            imageDescription="Jogos Publicitários"
            content='Relacione sua marca com sensações que intensifiquem o consumo'

            backgroundColor="#493736"
            id="jogos-publicitarios"
          />
          <HalfImageHalfTextRight
            title='Conteúdo Educativo Imersivo'
            imageUrl='./educativo-imersivo.jpeg'
            imageDescription="Conteúdo Educativo Imersivo"
            content='Plataforma de ensino que utiliza-se de realidade virtual'

            backgroundColor="#7B3B3B"
            id="conteudo-educativo"
          />
        <div className="rv-container">
          <ImageFullWidthWithDescription
            imageUrl={'./jogos-serios.jpeg'}
            title='JOGOS SÉRIOS'
            
          />
        </div>
      </div>
    )
  }
}
