import React from 'react'
import './EmailGatherer.css'

const apiUrl = 'https://m8v0zues98.execute-api.us-east-1.amazonaws.com/dev/emailportal'

export class EmailGatherer extends React.Component {

  getCustomerEmail(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const data = {
      name: this.props.method,
      sender: event.target.email.value,
      message: `E-mail vindo de ${this.props.method}`,
      method: this.props.method,
    }
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*')
    fetch(apiUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: headers,
      body: JSON.stringify(data)
    }).then((response) => {
      alert('Seu e-mail foi enviado com sucesso!')
    }).catch((error) => {
      alert('ocorreu um erro, por favor, tente mais tarde')
    })
  }

  render() {
    const { label, placeholder, submitText } = this.props;
    return (
      <div className="email-gatherer-container">
        <form onSubmit={this.getCustomerEmail}>
          <div className="email-gatherer-input-container">
            <label className="email-gatherer-input-label" htmlFor="email">{label}</label>
            <input className="email-gatherer-input" type="email" name="email" placeholder={placeholder}/>
            <input type="submit" value={submitText} className="email-gatherer-input-submit"/>
          </div>
        </form>
      </div>
    )
  }
}
