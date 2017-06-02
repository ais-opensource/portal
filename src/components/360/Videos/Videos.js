import React from 'react'
import { ItemList } from '../ItemList'
import { PageTitle } from '../../content/PageTitle/PageTitle'
export class Videos extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div>
        <PageTitle title="Experimente agora!" />
        <ItemList type="video" mediaUrl="tUxyD9Ps6P4" imageUrl='https://s3.amazonaws.com/ais-image-bank/ticket-loko.jpeg' description='Ticket Loko - Rafain Show' {...this.props} />
        <ItemList type="video" mediaUrl="q0YmymE_tgE" imageUrl='https://s3.amazonaws.com/ais-image-bank/cataratas.jpeg' description='Cataratas do Iguaçu' {...this.props} />
      </div>
    )
  }
}
