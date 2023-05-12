import React from 'react'
import './Card.css';


class Card extends React.Component {
    render() {
      const {name, info, url} = this.props;
      return(
        <div className= "card">
          <div className="card-body">
            <img className="images" src={url} alt={name}/>
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{info}</p>
          </div>
          <div className="card-footer">
            <button className="card-add">Click</button>
          </div>
        </div>
      );
    }
  }

  export default Card;