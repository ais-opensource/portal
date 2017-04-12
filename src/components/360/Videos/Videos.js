import React from 'react'
import { ItemList } from '../ItemList'
export class Videos extends React.Component {
  render() {
    return (
      <div>
        <ItemList type="video" mediaUrl="rafain.mp4" imageUrl='https://s3.amazonaws.com/ais-image-bank/Screen+Shot+2017-04-11+at+12.10.47.png' description='Ticket Loko - Rafain Show' {...this.props} />
        <ItemList type="video" mediaUrl="cataratas.mp4" imageUrl='https://s3.amazonaws.com/ais-image-bank/Screen+Shot+2017-04-11+at+12.10.24.png' description='Cataratas do Iguaçu' {...this.props} />
      </div>
    )
  }
}
