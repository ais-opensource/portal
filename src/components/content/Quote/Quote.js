import React from 'react';
import './Quote.css';

export class Quote extends React.Component {

  render() {
    const { name, job, company, quote, avatarUrl } = this.props;
    const avatar = {
      backgroundImage: `url('${avatarUrl}')`
    }
    return (
      <div className="quote-container">
        <div className="quote-avatar-container" style={avatar}>
          <div className="quote-author">{name}</div>
          <div className="quote-author-job">{job}</div>
          <div className="quote-author-company">{company}</div>
        </div>
        <div className="quote-text">
          <div className="left-quote"></div>
          <div className="quote-text-content">{quote}</div>
          <div className="right-quote"></div>
        </div>
      </div>
    )
  }
}
