import React from 'react'
import { HalfVideoTextRight } from '../content/HalfVideoTextRight/HalfVideoTextRight'
import { HalfVideoTextLeft } from '../content/HalfVideoTextLeft/HalfVideoTextLeft'
import { PageTitle } from '../content/PageTitle/PageTitle'
import { VideoFullWidth } from '../content/VideoFullWidth/VideoFullWidth'
import './RealidadeAumentada.css'

export class RealidadeAumentada extends React.Component {
  render() {
    return (
        <div>
        <PageTitle title="Realidade Aumentada" />
        <div id="caca-noel">

          <HalfVideoTextRight
            videoUrl='https://www.youtube.com/embed/vsWIk4NAxmI'
            title='Caça Noel'
            buttonUrl='https://play.google.com/store/apps/details?id=com.AIS.ShoppingGO'
            content='Ação de Natal usando RA feita para o Cataratas JL Shopping'
            backgroundColor='#4e6766'
          />
        </div>
        <HalfVideoTextLeft
          backgroundColor="#4e6766"
          videoUrl='https://www.youtube.com/embed/_2rwrEFiP20'
          title='Páscoa Virtual'
          buttonUrl='http://www.pascoavirtual.com.br'
          content='A Páscoa Virtual é uma ação de Marketing Tecnológica para Shoppings e lojas de chocolate'
          backgroundColor='#4e6766'
        />
        <div className="ra-container" id="outdoor">
          <div className="ra-title">Outdoor Virtual</div>
          <VideoFullWidth
            videoUrl='https://www.youtube.com/embed/cTg5yfdv1u4'
            buttonUrl="https://play.google.com/store/apps/details?id=com.AIS.WRO"
          />
        </div>
      </div>
    )
  }
}
