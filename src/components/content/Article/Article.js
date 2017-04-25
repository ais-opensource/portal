import React from 'react'
import './Article.css'


export class Article extends React.Component {
    render() {
      const { title, subheader, body } = this.props
      return (
        <div>
          <div className="article-title">
            {title}
          </div>
          <div className="article-subheader">
            {subheader}
          </div>
          <div className="article-body">
            {body}
          </div>
        </div>
      )
    }
}
