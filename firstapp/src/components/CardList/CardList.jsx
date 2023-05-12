import React from 'react';
// import { card } from './API';
import Card from '../Card/Card';
import './CardList.css';

function CardList(props) {
    const {data} = props;
    return (
      <React.Fragment>
      {data.map( $ =>{
        return <Card {...$}/>
        // return <Card
        // title={$.title}
        // description={$.description}
        // imgLink={$.imgLink}
        // />
      })}
  </React.Fragment>
    );
  }
  export default CardList;