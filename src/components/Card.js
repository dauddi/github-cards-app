import React from "react";
import './css/card.css'

function Card(props){
	const profile = props.card__object
	
	return(
		<div className="card">
			<img className="card__image" src={profile.avatar_url} alt="" />
			<div className="card__text">
				<h2>Name: { (profile.name == null) ? 'Unknown 😥' : profile.name }</h2>
				<p><strong>Company:</strong> { (profile.company == null) ? 'Unknown 😥' : profile.company }</p>
			</div>
		</div>
	)
}

export default Card;