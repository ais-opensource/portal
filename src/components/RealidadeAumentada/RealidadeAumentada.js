import React from 'react'
import { HalfVideoTextRight } from '../content/HalfVideoTextRight/HalfVideoTextRight'
import { HalfVideoTextLeft } from '../content/HalfVideoTextLeft/HalfVideoTextLeft'
import { ImageFullWidthWithDescription } from '../content/ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { VideoFullWidth } from '../content/VideoFullWidth/VideoFullWidth'
import { AISActionButton } from '../ui-elements/AISActionButton'
import { PageSubTitle } from '../content/PageTitle/PageTitle'
import { AISHelmet } from '../utilities/AISHelmet/AISHelmet'
import './RealidadeAumentada.css'

export class RealidadeAumentada extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    const imageUrl='./realidade-aumentada-celular.jpeg'
    const title='Realidade Aumentada'
    const textContent='Onde o mundo real e o virtual se unem'
    return (
        <div>
          <AISHelmet
            imageContent={imageUrl}
            title={title}
            description={textContent}
            url='http://www.ambientesvirtuais.com/realidade-aumentada'
          />
          <ImageFullWidthWithDescription
            imageUrl={imageUrl}
            title={title}
            textContent={textContent}>
              <AISActionButton text="ENTRE EM CONTATO AGORA" url="/quem-somos" eventType="REALIDADE_AUMENTADA_CONTATO"/>
          </ImageFullWidthWithDescription>
          <PageSubTitle subtitle="Veja algumas de nossas soluções de realidade aumentada" />
          <HalfVideoTextRight
              videoUrl='https://www.youtube.com/embed/vsWIk4NAxmI'
              title='Caça Noel'
              buttonUrl='https://play.google.com/store/apps/details?id=com.AIS.ShoppingGO'
              buttonText='BAIXE AGORA'
              content='Ação de Natal usando RA feita para o Cataratas JL Shopping'
              backgroundColor='#a07e39'
          />
          <HalfVideoTextLeft
            videoUrl='https://www.youtube.com/embed/_2rwrEFiP20'
            title='Páscoa Virtual'
            buttonUrl='http://www.pascoavirtual.com.br'
            content='A Páscoa Virtual é uma ação de Marketing Tecnológica para Shoppings e lojas de chocolate'
            backgroundColor='#a07e39'
          />
          <div id="outdoor">
            <PageSubTitle subtitle="Outdoor Virtual" />
            <VideoFullWidth
              videoUrl='https://www.youtube.com/embed/cTg5yfdv1u4'
              buttonUrl="./outdoorvirtual.pdf"
            >
              <div className="outdoor-button">
                <AISActionButton text="SAIBA MAIS" url="./outdoorvirtual.pdf" />
              </div>
            </VideoFullWidth>
          </div>
      </div>
    )
  }
}
