import React from 'react'
import { ItemList } from '../ItemList'
import { ImageFullWidthWithDescription } from '../../content/ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { EmailGatherer } from '../../../components/ui-elements/EmailGatherer'

export class Fotos extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>
        <ImageFullWidthWithDescription
          imageUrl='./predios-meio-futuristas.jpeg' title='Experimente agora!'
          textContent='Use nossa plataforma WebVR, onde você pode experimentar sem apps adicionais'>
            <EmailGatherer label="Email" placeholder="seuemail@provedor.com" submitText="Entre em contato" method='EMAIL_GATHERER_FOTOS_360' />
        </ImageFullWidthWithDescription>
        <ItemList type="foto" mediaUrl="itaipu-u21-360.jpeg" imageUrl='https://s3.amazonaws.com/ais-image-bank/Screen+Shot+2017-04-11+at+12.10.47.png' description='Itaipu Binacional - U21' {...this.props} />
        <ItemList type="foto" mediaUrl="palio-360.jpeg" imageUrl='https://s3.amazonaws.com/ais-image-bank/Screen+Shot+2017-04-11+at+12.10.24.png' description='Interior Veículo Elétrico' {...this.props} />
        <ItemList type="foto" mediaUrl="ecomuseu-360.jpeg" imageUrl='https://s3.amazonaws.com/ais-image-bank/eco-museu-mini.png' description='Eco Museu - Foz do Iguaçu' {...this.props} />
      </div>
    )
  }
}
