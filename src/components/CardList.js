import React from "react";
import Card from "./Card"

function CardList(props){
	const profiles = props.card__object
	
	return (
		<div className="cards__container">
			{ profiles.map(profile => <Card key={profile.id} card__object={profile} /> ) }
		</div>
	);
	
}

export default CardList;