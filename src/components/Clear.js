import React from "react";

function Clear(props){
	let emptyArray = []
	const onClickHandler = () => {
		props.userDataHandler([...emptyArray])
	}
	return(
		<button onClick={onClickHandler}>
			Clear
		</button>
	)
}

export default Clear;