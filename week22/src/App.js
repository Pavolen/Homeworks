import React from 'react';
import { card, heroes } from './API';
import CardList from './components/CardList/CardList';

const App = () =>{
  return (
    <CardList data={heroes} />
  )
}
export default App;




