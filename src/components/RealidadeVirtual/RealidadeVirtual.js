import React from 'react'
import { PageSubTitle } from '../content/PageTitle/PageTitle'
import { ImageFullWidthWithDescription } from '../content/ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { HalfImageHalfTextLeft } from '../content/HalfImageHalfTextLeft/HalfImageHalfTextLeft'
import { HalfImageHalfTextRight } from '../content/HalfImageHalfTextRight/HalfImageHalfTextRight'
import { EmailGatherer } from '../ui-elements/EmailGatherer'
import { AISHelmet } from '../utilities/AISHelmet/AISHelmet'
import './RealidadeVirtual.css'

export class RealidadeVirtual extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    const imageUrl='http://ambientesvirtuais.com/virtual-reality-homem.jpeg'
    const title='Realidade Virtual'
    const textContent='Trazendo o mundo virtual para perto de você'
    return (
      <div>
        <AISHelmet
          imageContent={imageUrl}
          title={title}
          description={textContent}
          url='http://www.ambientesvirtuais.com/realidade-virtual'
        />
        <ImageFullWidthWithDescription
          imageUrl={imageUrl} title={title}
          textContent={textContent}>
            <EmailGatherer
              label="Descubra como utilizar a tecnologia para aumentar os seus resultados"
              placeholder="seuemail@provedor.com"
              submitText="Quero ter uma consultoria gratuita"
              method='EMAIL_GATHERER_OUTDOOR_VIRTUAL'
            />
        </ImageFullWidthWithDescription>
        <PageSubTitle subtitle="Veja algumas de nossas soluções de realidade virtual" />
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
            imageUrl='./maquetevirtual.png'
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
            title='Jogos Sérios'
            imageUrl='./jogos-serios.jpeg'
            imageDescription="Jogos Sérios"
            content='Simule situações reais improváveis e treine sua equipe'
            backgroundColor="#1e152a"
            id="jogos-serios"
            buttonUrl="/jogos-serios"
          />
      </div>
    )
  }
}
