import React from "react";
import "./css/form.css"

function Form(){
	return(
		<form className="form">
			<input type="text" placeholder="Enter github username" />
			<button type="">Add User</button>
		</form>
	)
}

export default Form;