import React from "react";
import axios from 'axios';
import "./css/form.css"
import Clear from './Clear';

function Form(props){
	let newUserName;
	const onChangeHandler = (e) => {
		newUserName = e.target.value
	}

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		
		const response = await axios.get(`https://api.github.com/users/${newUserName}`);
		const data = await response.data

		props.userDataHandler([data, ...props.currentState]);
		return ''
	}


	return(
		<form onSubmit={onSubmitHandler} className="form">
			<input onChange={onChangeHandler} type="text" placeholder="github username" required />
			<button>Add User</button>
			<Clear userDataHandler={props.userDataHandler} />
		</form>
	)
}

export default Form;