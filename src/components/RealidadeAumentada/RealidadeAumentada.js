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
          <div className="ra-title">Caça Noel</div>
          <HalfVideoTextRight
            backgroundColor="#901111"
            videoUrl='https://www.youtube.com/embed/vsWIk4NAxmI'
            title='Ache os Noéis'
            buttonUrl='https://play.google.com/store/apps/details?id=com.AIS.ShoppingGO'
            content='Ação de Natal usando RA feita para o Cataratas JL Shopping'
          />
        </div>
        <div className="ra-container" id="pascoa-virtual">
          <div className="ra-title">Páscoa Virtual</div>
          <HalfVideoTextLeft
            backgroundColor="#7892A5"
            videoUrl='https://www.youtube.com/embed/_2rwrEFiP20'
            title='Na busca aos ovos de Páscoa'
            buttonUrl='http://www.pascoavirtual.com.br'
            content='A Páscoa Virtual é uma ação de Marketing Tecnológica para Shoppings e lojas de chocolate'
          />
        </div>
        <div className="ra-container" id="outdoor">
          <div className="ra-title">Outdoor Virtual</div>
          <VideoFullWidth videoUrl='https://www.youtube.com/embed/cTg5yfdv1u4' buttonUrl="https://play.google.com/store/apps/details?id=com.AIS.WRO"/>
        </div>
      </div>
    )
  }
}
