import React, { Component } from "react";

class Sumador extends Component {

    state = {
      numero: 0
    };

    handleSumaClick = this.handleSumaClick.bind(this);

    handleSumaClick() {
      this.setState({ numero: this.state.numero + 1 });
    }

  render() {
    console.log("Render")
    const { state: { numero }, handleSumaClick } = this;
    return (
      <>
        <h1>{numero}</h1>
        <button onClick={handleSumaClick}>Sumar</button>
      </>
    );
  }
}

export default Sumador;