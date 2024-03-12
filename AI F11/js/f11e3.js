//Componente Presentational

import React, { Component } from "react";

class NewInfo extends Component {
  render() {
    return (
      <article>
        <h1>{this.props.title}</h1>
        <p>{this.props.lead}</p>
        <p>{this.props.body}</p>
      </article>
    );
  }
}

export default NewInfo;