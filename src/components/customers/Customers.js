import React from 'react'
import './Customers.css'

export class Customer extends React.Component {
  render() {
    const { url, name, imageUrl } = this.props;
    console.log('imageurl', imageUrl)
    return (
      <div className="customer-container">
        <div >
          <a href={url}><img className="customer-image" src={imageUrl} alt={name} /> </a>
        </div>
      </div>
    )
  }
}

export class Customers extends React.Component {

  _renderCustomers() {
    const { customers } = this.props;
    return customers ? customers.map((customer) => {
      return <Customer imageUrl={customer.imageUrl} name={customer.name} url={customer.url}/>
    }) : null;
  }
  render() {
    return (
      <div className="customers-container">
          {this._renderCustomers()}
      </div>
    )
  }
}
