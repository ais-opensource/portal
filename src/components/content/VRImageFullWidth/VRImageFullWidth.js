import React from 'react';
import './VRImageFullWidth.css';

export class VRImageFullWidth extends React.Component {


  render(){
    const rawImageUrl = this.props.match.params.path
    const imageUrl = `./360/${rawImageUrl}`
    return (
      <a-scene>
        <a-sky src={imageUrl} rotation="0 0 0"></a-sky>
      </a-scene>
    )
  }
}
