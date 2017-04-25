import React from 'react'
import { ItemList } from '../ItemList'
export class Videos extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div>
        <ItemList type="video" mediaUrl="rafain.mp4" imageUrl='https://s3.amazonaws.com/ais-image-bank/ticket-loko.jpeg' description='Ticket Loko - Rafain Show' {...this.props} />
        <ItemList type="video" mediaUrl="cataratas.mp4" imageUrl='https://s3.amazonaws.com/ais-image-bank/cataratas.jpeg' description='Cataratas do Iguaçu' {...this.props} />
      </div>
    )
  }
}
