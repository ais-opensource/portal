import React from 'react'
import './PageTitle.css'

export class PageTitle extends React.Component {

  render() {
    const { title } = this.props;
    return (
      <div className="main-title">
        { title }
      </div>
    )
  }
}

export const PageSubTitle = (props) => {

  return (
    <div className="sub-title">
      {props.subtitle}
    </div>
  )
}
