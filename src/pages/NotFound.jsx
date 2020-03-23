import React from 'react'
import image404 from '../assets/404.webp';
import "./styles/NotFound.scss";

class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="NotFound__container">
          <img className="NotFound-image" src={image404} alt="Not Found" />
          <h2>Hmmmm... No encontramos lo que buscas</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
