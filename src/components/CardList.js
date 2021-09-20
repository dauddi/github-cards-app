import React from "react";
import Card from "./Card"

function CardList(props){
	return (
		<div className="cards__container">
			{ props.card__object.map(profile__object => {
				return <Card card__object = {profile__object}/>
			}) }		
		</div>
	);
	
}

export default CardList;