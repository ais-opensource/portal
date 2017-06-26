import React from 'react'
import { PageSubTitle } from '../content/PageTitle/PageTitle'
import { HalfImageHalfTextRight } from '../content/HalfImageHalfTextRight/HalfImageHalfTextRight'
import { HalfImageHalfTextLeft } from '../content/HalfImageHalfTextLeft/HalfImageHalfTextLeft'
import { ImageFullWidthWithDescription } from '../content/ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { AISActionButton } from '../ui-elements/AISActionButton'
import { AISHelmet } from '../utilities//AISHelmet/AISHelmet'
import './360.css'

export class Three60 extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  _renderGoogleMapsContent() {
    return (
      <div>
        Mostre seu negócio para o mundo pelo Google Maps e Street View com nosso serviço certificado
        <div>
          <img className="trusted-logo" src="./trusted.png" alt="trusted"/>
        </div>
      </div>
    )
  }
  render() {
    const imageUrl='./oculus.jpeg'
    const title='Conteúdo 360'
    const textContent='Demonstre sua estrutura de maneira imersiva'
    return (
      <div>
        <AISHelmet
          imageContent={imageUrl}
          title={title}
          description={textContent}
          url='http://www.ambientesvirtuais.com/videos-360'
        />
        <ImageFullWidthWithDescription
          imageUrl={imageUrl} title={title}
          textContent={textContent}>
            <AISActionButton text="ENTRE EM CONTATO AGORA" url="/quem-somos" eventType='ENTRE_EM_CONTATO_360'/>
        </ImageFullWidthWithDescription>
        <PageSubTitle subtitle="Veja algumas de nossas soluções de mídia 360" />
        <HalfImageHalfTextRight
          title='Videos 360'
          imageUrl='./chateau-world.jpeg'
          imageDescription="Homem em cima de um morro"
          content='Transporte emoções por diferentes pontos de vista'
          backgroundColor="#6c698d"
          buttonUrl='/videos-360'
        />
        <HalfImageHalfTextLeft
          title='Fotos 360'
          imageUrl='./photos.jpeg'
          imageDescription="Câmeras"
          content='Construções, paisagens e projetos arquitetônicos no mundo virtual estão mais acessíveis do que nunca'
          backgroundColor="#6c698d"
          buttonUrl='/fotos-360'
        />
      </div>
    )
  }
}
