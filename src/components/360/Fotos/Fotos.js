import React from 'react'
import { ItemList } from '../ItemList'
//import { PageTitle } from '.../content/PageTitle/PageTitle'
export class Fotos extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  
  render() {
    return (
      <div>
        <ItemList type="foto" mediaUrl="itaipu-u21-360.jpeg" imageUrl='https://s3.amazonaws.com/ais-image-bank/Screen+Shot+2017-04-11+at+12.10.47.png' description='Itaipu Binacional - U21' {...this.props} />
        <ItemList type="foto" mediaUrl="palio-360.jpeg" imageUrl='https://s3.amazonaws.com/ais-image-bank/Screen+Shot+2017-04-11+at+12.10.24.png' description='Interior Veículo Elétrico' {...this.props} />
        <ItemList type="foto" mediaUrl="ecomuseu-360.jpeg" imageUrl='https://s3.amazonaws.com/ais-image-bank/eco-museu-mini.png' description='Eco Museu - Foz do Iguaçu' {...this.props} />
      </div>
    )
  }
}
