import React from 'react'
import { PageTitle } from '../content/PageTitle/PageTitle'
import { HalfImageHalfTextLeft } from '../content/HalfImageHalfTextLeft/HalfImageHalfTextLeft'
import { HalfImageHalfTextRight } from '../content/HalfImageHalfTextRight/HalfImageHalfTextRight'
import { ImageFullWidthWithDescription } from '../content/ImageFullWidthWithDescription/ImageFullWidthWithDescription'

import './RealidadeVirtual.css'

export class RealidadeVirtual extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div>
        <PageTitle title="Realidade Virtual" />
          <HalfImageHalfTextLeft
            title='Promoções Turísticas'
            imageUrl='./town-on-rocks-by-sea.jpeg'
            buttonUrl="/promocoes-turisticas"
            imageDescription="Promoções turísticas"
            content='Possibilite a emoção de passeios turísticos mesmo à distância'
            backgroundColor='#1e152a'
            id="promocoes-turisticas"

          />
          <HalfImageHalfTextRight
            title='Maquetes Virtuais'
            imageUrl='./maquetevirtual.jpg'
            imageDescription="Maquetes Virtuais"
            content='Apresentação de modelos 3D executados em tempo real'
            backgroundColor="#1e152a"
            id="maquetes"
            buttonUrl="/maquetes-digitais"
          />
          <HalfImageHalfTextLeft
            title='Jogos Publicitários'
            imageUrl='./jogos-publicitarios.jpeg'
            imageDescription="Jogos Publicitários"
            content='Relacione sua marca com sensações que intensifiquem o consumo'
            backgroundColor="#1e152a"
            id="jogos-publicitarios"
            buttonUrl="jogos-publicitarios"
          />
          <HalfImageHalfTextRight
            title='Conteúdo Educativo Imersivo'
            imageUrl='./educativo-imersivo.jpeg'
            imageDescription="Conteúdo Educativo Imersivo"
            content='Plataforma de ensino que utiliza-se de realidade virtual'
            backgroundColor="#1e152a"
            id="conteudo-educativo"
            buttonUrl="/educativo"
          />
        <div className="rv-container">
          <ImageFullWidthWithDescription
            imageUrl={'./jogos-serios.jpeg'}
            title='JOGOS SÉRIOS'
            buttonUrl="/jogos-serios"
          />
        </div>
      </div>
    )
  }
}
