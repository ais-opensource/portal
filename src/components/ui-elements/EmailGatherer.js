import React from 'react'
import './EmailGatherer.css'

const apiUrl = 'https://m8v0zues98.execute-api.us-east-1.amazonaws.com/dev/emailportal'

export class EmailGatherer extends React.Component {

  getCustomerEmail(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const data = {
      name: name,
      sender: email,
      message: `AE! Alguém entrou ficou interessado na AIS através da seguinte página -> ${this.props.method}`,
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
    event.target.email.value = '';
  }

  render() {
    const { label, placeholder, submitText, labelSize } = this.props;
    return (
      <div className="email-gatherer-container">
        <div className="email-gatherer-label" style={{fontSize: labelSize}}>
          {label}
        </div>
        <div className="email-gatherer-form">
          <form onSubmit={this.getCustomerEmail.bind(this)}>
            <div className="email-gatherer-input-container">
              <input type="text" className="email-gatherer-input" name="name" placeholder="José da Silva" required/>
              <input type="tel" className="email-gatherer-input" name="telefone" placeholder="(11) 99999-9999" required/>
              <input className="email-gatherer-input" type="email" name="email" placeholder={placeholder} required/>
              <input type="submit" value={submitText} className="email-gatherer-input-submit"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
