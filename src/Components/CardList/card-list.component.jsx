import React from 'react';
import './card-list.styles.css'
import { Card } from "../Card/Card.component"
export const CardList=props=>{

return <div className="card-list"  >{props.monsters.map(monsters=><Card  id={monsters.id} name={monsters.name}> </Card> )    }</div>;
} 