import React from 'react'
import './card.styles.css'
export const Card = props => {
return <div class="card-container" >
  <img   width="180" height="180" align="right" src={`https://robohash.org/${props.id}?set=set2`} />  
<h2>{props.name}</h2>
<p>{props.name}@gmail.com</p>
   </div>
}