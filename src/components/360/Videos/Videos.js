import React from 'react'
import { ItemList } from '../ItemList'
import { ImageFullWidthWithDescription } from '../../content/ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { EmailGatherer } from '../../../components/ui-elements/EmailGatherer'
import { AISHelmet } from '../../../components/utilities/AISHelmet/AISHelmet'

export class Videos extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    const imageUrl = './predios-meio-futuristas.jpeg'
    const title = 'Experimente Agora!'
    const textContent = 'Use nossa plataforma WebVR, onde você pode experimentar sem apps adicionais'
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
            <EmailGatherer label="Email" placeholder="seuemail@provedor.com" submitText="Entre em contato" method='EMAIL_GATHERER_VIDEOS_360' />
        </ImageFullWidthWithDescription>
        <ItemList type="video" mediaUrl="tUxyD9Ps6P4" imageUrl='https://s3.amazonaws.com/ais-image-bank/ticket-loko.jpeg' description='Ticket Loko - Rafain Show' {...this.props} />
        <ItemList type="video" mediaUrl="q0YmymE_tgE" imageUrl='https://s3.amazonaws.com/ais-image-bank/cataratas.jpeg' description='Cataratas do Iguaçu' {...this.props} />
      </div>
    )
  }
}
