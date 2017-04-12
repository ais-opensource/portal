import React from 'react'
import './ItemList.css'

export class ItemList extends React.Component {

  goToUrl() {

    const {type, mediaUrl} = this.props
    this.props.history.push(`/${type}/${mediaUrl}`)
  }

  render() {
    return (
      <div className="item-container" onClick={this.goToUrl.bind(this)}>
        <div className="item-image-container" >
          <img className="item-image" src={this.props.imageUrl} alt={this.props.description} />
        </div>
        <div className="item-description">
          {this.props.description}
        </div>
      </div>
    )
  }
}
