import React from 'react'
import { PageTitle } from '../content/PageTitle/PageTitle'
import { HalfImageHalfTextRight } from '../content/HalfImageHalfTextRight/HalfImageHalfTextRight'
import { HalfImageHalfTextLeft } from '../content/HalfImageHalfTextLeft/HalfImageHalfTextLeft'
import './360.css'

export class Three60 extends React.Component {
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
    return (
      <div>
        <PageTitle title="Mídia 360" />
        <HalfImageHalfTextRight
          title='Google Maps'
          imageUrl='./google-maps.jpeg'
          imageDescription="Escritório"
          content={this._renderGoogleMapsContent()}
          backgroundColor="#7B3B3B"
        />
        <HalfImageHalfTextLeft
          title='Fotos'
          imageUrl='./photos.jpeg'
          imageDescription="Câmeras"
          content='Construções, paisagens e projetos arquitetônicos mais acessíveis do que nunca'
          backgroundColor="#493736"
          buttonUrl='/fotos-360'
        />
        <HalfImageHalfTextRight
          title='Videos 360'
          imageUrl='./chateau-world.jpeg'
          imageDescription="Homem em cima de um morro"
          content='Transporte emoções por diferentes pontos de vista através de Vídeos 360'
          backgroundColor="#7B3B3B"
          buttonUrl='/videos-360'
        />
      </div>
    )
  }
}
