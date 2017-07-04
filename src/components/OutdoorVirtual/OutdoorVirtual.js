import React from 'react';
import { VideoFullWidth } from '../content/VideoFullWidth/VideoFullWidth';
import { AISHelmet } from '../utilities/AISHelmet/AISHelmet';
import { EmailGatherer } from '../ui-elements/EmailGatherer';
import { Vantagens } from '../content/Vantagens/Vantagens';
import { Quote } from '../content/Quote/Quote';
import './OutdoorVirtual.css'

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
            <EmailGatherer
              label="Descubra como utilizar a tecnologia para aumentar os seus resultados"
              placeholder="seuemail@provedor.com"
              labelSize="28px"
              submitText="Quero uma consultoria gratuita"
              method='EMAIL_GATHERER_OUTDOOR_VIRTUAL' />
          </div>
        </VideoFullWidth>
        <div className="outdoor-virtual-outdoor">
          <div>Vantagens</div>
          <img src="https://s3.amazonaws.com/ais-image-bank/trendy.svg" className="outdoor-virtual-outdoor-icon" />
        </div>
        <Vantagens vantagens={vantagens}/>
        <Quote
          avatarUrl='http://i.dailymail.co.uk/i/pix/2012/08/31/article-2196121-14C1AE8F000005DC-112_306x446.jpg'
          name='Steve Jobs'
          job='CEO'
          company='Apple, Inc'
          quote='Tive muitas inspirações magníficas com esses piá.'
        />
      </div>
    )
  }
}
