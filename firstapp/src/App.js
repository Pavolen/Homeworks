import React from 'react';
import Card from './Card';

class Card extends React.Component {
  render() {
    return (
      React.createElement(
        "div",
        {
          className: "card"
        },
        React.createElement(
          "div",
          {
            classname: "card-body"
          },
          React.createElement("img", {
            src:"https://github.com/Pavolen/Homeworks/blob/main/firstapp/src/components/img/Batman.jpg",
            alt:"Бетмен"
          }),
          React.createElement(
            "h4",
          {
            classname: "card-title" 
          },
          "Бетмен"
          ),
          React.createElement(
            "p",
            {
              classname: "card-text"
            },
            "борец с преступностью, филантроп, миллиардер"
          )
        ),
        React.createElement(
          "div",
          {
            classname: "card-footer"
          },
          React.createElement(
            "button",
            {
              classname: "card-add"
            },
            "Click"
          )
        )
      )
    );
  }
}
export default Card;

class Card extends React.Component {
  render() {
    const {title, description, imgLink} = this.props;
    return(
      <div className= "card">
        <div className="card-body">
          <img src={imgLink} alt={title}/>
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <button className="card-add">Click</button>
        </div>
      </div>
    );
  }
}
<Card
title="Бетмен"
description="Борец с преступностью, филантроп, миллиардер"
imgLink="https://github.com/Pavolen/Homeworks/blob/main/firstapp/src/components/img/Batman.jpg"
/>

function Card(props) {
  return(
    <div className="card">
        <div className="card-body">
          <img src={props.imgLink} alt={props.title}/>
          <h4 className="card-title">{props.title}</h4> 
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
          <button className="card-add">Click</button>
        </div>
        </div>
  );
} 
class CardList extends React.Component{
  render() {
    return (
      <React.Fragment>
        <Card
        title="Бетмен"
        description="борец с преступностью, филантроп, миллиардер"
        imgLink="https://github.com/Pavolen/Homeworks/blob/main/firstapp/src/components/img/Batman.jpg"
        />
        <Card
        title="Супермен"
        description="борец за справедливость"
        imgLink="https://github.com/Pavolen/Homeworks/blob/main/firstapp/src/components/img/Superman.jpg"
        />
        <Card
        title="Железный человек"
        description="гений, миллиардер, плейбой, филантроп"
        imgLink="https://github.com/Pavolen/Homeworks/blob/main/firstapp/src/components/img/Iron%20Man.jpg"
        />
        <Card
        title="Человек-паук"
        description="борец за справедливость, студент, фотограф"
        imgLink="https://github.com/Pavolen/Homeworks/blob/main/firstapp/src/components/img/Spider-Man.jpg.jpg"
        />
        <Card
        title="Капитан Америка"
        description="супер-солдат"
        imgLink="https://github.com/Pavolen/Homeworks/blob/main/firstapp/src/components/img/Captain%20America.jpg"
        />
      </React.Fragment>
    );
  }
}
export default CardList;

import React  from 'react';
import Card from './components';

function CardList() {
  return (
    <React.Fragment>
      <Card
      title="Бетмен"
      description="борец с преступностью, филантроп, миллиардер"
      imgLink="https://github.com/Pavolen/Homeworks/blob/main/firstapp/src/components/img/Batman.jpg"
      />
      <Card
      title="Супермен"
      description="борец за справедливость"
      imgLink="https://github.com/Pavolen/Homeworks/blob/main/firstapp/src/components/img/Superman.jpg"
      />
      <Card
      title="Железный человек"
      description="гений, миллиардер, плейбой, филантроп"
      imgLink="https://github.com/Pavolen/Homeworks/blob/main/firstapp/src/components/img/Iron%20Man.jpg"
      />
      <Card
      title="Человек-паук"
      description="борец за справедливость, студент, фотограф"
      imgLink="https://github.com/Pavolen/Homeworks/blob/main/firstapp/src/components/img/Spider-Man.jpg.jpg"
      />
      <Card
      title="Капитан Америка"
      description="супер-солдат"
      imgLink="https://github.com/Pavolen/Homeworks/blob/main/firstapp/src/components/img/Captain%20America.jpg"
      />
    </React.Fragment>
  );
}
export default CardList;
