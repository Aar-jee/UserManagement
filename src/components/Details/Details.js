import React, { Component } from "react";

class Details extends Component {
  render() {
    console.log(this.props.name);
    return (
      <div className="Details">
        <h3>Name:{this.props.name}</h3>
        <h4></h4>
        <span><a href="/">Go to HomePage</a></span>{' '}
       </div>
    )
  }
}

export default Details;
