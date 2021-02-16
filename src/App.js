import React, { Component } from "react";
import "./assets/style.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutri: [],
    };
  }
  componentDidMount() {
    const url = "https://sujeitoprogramador.com/rn-api/?api=posts";
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        let state = this.state;
        state.nutri = json;
        this.setState(state);
      });
    console.log(this.state);
  }
  render() {
    return (
      <div className="container-post">
        <header>
          <h3>React nutri</h3>
        </header>
        {this.state.nutri.map((item) => {
          return (
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className="img" />
              <p className="subtitulo">{item.subtitulo}</p>
              <a href="/#" className="btn">
                Veja mais
              </a>
            </article>
          );
        })}
      </div>
    );
  }
}
