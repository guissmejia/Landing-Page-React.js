import React from "react";
import imageHome from '../assets/figure.png'
import "./styles/Home.scss";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero">
          <div className="hero__text">
            <h1>
              Hello <span>World</span>
            </h1>
            <h3>
              Lorem ipsum dolor sit amet, actetur adipiscing elit.
              <br />
              Aenean <span>dolor</span>
              nisi.
            </h3>
            <div className="hero--button">
              <button>Button</button>
            </div>
          </div>
          <div className="hero__image">
            <img src={imageHome} alt="figure" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
