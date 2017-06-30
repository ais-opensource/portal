import React from 'react';
import './Quote.css';

export class Quote extends React.Component {

  render() {
    return (
      <div className="quote-container">
        <div className="quote-avatar-container">
          <div className="quote-author">Ulsain Bolt</div>
          <div className="quote-author-job">Atleta</div>
          <div className="quote-author-company">Jamaica</div>
        </div>
        <div className="quote-text">
          <div className="left-quote"></div>
          <div className="quote-text-content">Ganhei a ultima corrida como e como sempre a AIS tava lá me apoiando. bjs</div>
          <div className="right-quote"></div>
        </div>
      </div>
    )
  }
}
