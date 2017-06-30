import React from 'react';
import { VideoFullWidth } from '../content/VideoFullWidth/VideoFullWidth';
import { AISHelmet } from '../utilities/AISHelmet/AISHelmet';
import { EmailGatherer } from '../ui-elements/EmailGatherer';
import { Vantagens } from '../content/Vantagens/Vantagens';
export class OutdoorVirtual extends React.Component {

  render() {
    const vantagens = [
      {
        title: 'RENOVE SUAS IDEIAS',
        text: 'Aplique a tecnologia do Outdoor Virtual para ações criativas e inovadoras',
        thumb: 'https://s3.amazonaws.com/ais-image-bank/portal/outdoor-virtual/light-bulb.svg'},
      {
        title: 'INSIRA FUNCIONALIDADES NO SEU OUTDOOR',
        text: 'Proporcione interações únicas com a marca do seu anunciante',
        thumb: 'https://s3.amazonaws.com/ais-image-bank/portal/outdoor-virtual/settings.svg'},
      {
        title: 'AÇÕES PROMOCIONAIS',
        text: 'Distribua cupons de desconto, faça sorteio de prêmios ou dê brindes',
        thumb: '	https://s3.amazonaws.com/ais-image-bank/portal/outdoor-virtual/point-of-service.svg'},
      {
        title: 'COMPARTILHÁVEL',
        text: 'Aumente a visualização do seu anúncio através do estímulo do compartilhamento',
        thumb: ' https://s3.amazonaws.com/ais-image-bank/portal/outdoor-virtual/share.svg'},
    ]
    return (
      <div className="outdoor-virtual-container">
        <AISHelmet
          imageContent='http://ambientesvirtuais.com/predios-meio-futuristas.jpeg'
          title='Outdoor Virtual | AIS - Ambientes Virtuais'
          description='Maximize os resultados e o alcance de suas campanhas'
          url='http://www.ambientesvirtuais.com/outdoor-virtual'
        />
        <VideoFullWidth
          webmUrl='./outdoor-virtual-hot.webm'
          mp4Url='./outdoor-virtual-hot.mp4'
          buttonUrl="./outdoorvirtual.pdf"
        >
          <div>
            <EmailGatherer label="Email" placeholder="seuemail@provedor.com" submitText="Entre em contato" method='EMAIL_GATHERER_FOTOS_360' />
          </div>
        </VideoFullWidth>
        <Vantagens vantagens={vantagens}/>
      </div>
    )
  }
}
