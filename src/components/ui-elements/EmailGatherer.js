import React from 'react'
import './EmailGatherer.css'


export class EmailGatherer extends React.Component {

  getCustomerEmail(event) {
    event.preventDefault();
    const email = event.target.email.value;
    console.log('wow, we got the email. and it is', email)
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
