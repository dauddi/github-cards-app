import React from "react";
import './css/card.css'

function Card(props){
	
	return(
		<div className="card">
			<img className="card__image" src={props.card__object.avatar_url} alt="" />
			<div className="card__text">
				<h2>{props.card__object.name}</h2>
				<p>{props.card__object.company}</p>
			</div>
		</div>
	)
}

export default Card;