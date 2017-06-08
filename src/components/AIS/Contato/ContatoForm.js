import React from 'react'
import './ContatoForm.css'

const apiUrl = 'https://m8v0zues98.execute-api.us-east-1.amazonaws.com/dev/emailportal'

export class ContatoForm extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    const data = {
      name: event.target.nome.value,
      sender: event.target.email.value,
      message: event.target.mensagem.value,
    }
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*')
    console.log('data')
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
    event.target.nome.value   = ''
    event.target.email.value  = ''
    event.target.mensagem.value = ''
  }
  render() {
    return (
      <form className="contato-form-container" onSubmit={this.onSubmit}>
        <div className="contato-form-header">
          <p>Estaremos sempre prontos para lhe ajudar nos seus futuros projetos</p>
          <p>Mande-nos uma mensagem para inciarmos uma conversa</p>
        </div>
        <div className="contato-input-container">
          <label className="contato-label" htmlFor="nome">Nome:</label>
          <input
            type="text"
            className="contato-input"
            placeholder="Maria da Silva"
            name="nome"
          />
        </div>
        <div className="contato-input-container">
          <label className="contato-label" htmlFor="email">E-mail:</label>
          <input
            type="text"
            className="contato-input"
            name="email"
            placeholder="maria@provedor.com"
          />
        </div>
        <div className="contato-input-container">
          <label className="contato-label" htmlFor="mensagem">Mensagem:</label>
          <textarea
            type="text"
            className=" text-area"
            name="mensagem"
            rows="7"
            placeholder="Escreva sua mensagem aqui.."
          >
          </textarea>
        </div>
        <div className="contato-input-container">
          <input
            className="submit-message"
            type="submit"
            value="ENVIAR"/>
        </div>
      </form>
    )
  }
}
