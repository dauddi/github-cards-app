import React, { useState } from "react";
import axios from 'axios';
import "./css/form.css"
import Clear from './Clear';

function Form(props){
	const [userNameInput, setUserNameInput] = useState('')
	const onChangeHandler = (e) => {
		setUserNameInput(e.target.value)
	}

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		
		const response = await axios.get(`https://api.github.com/users/${userNameInput}`);
		const data = await response.data

		props.userDataHandler([data, ...props.currentState]);
		setUserNameInput('')
	}


	return(
		<form onSubmit={onSubmitHandler} className="form">
			<input onChange={onChangeHandler} value={userNameInput} type="text" placeholder="github username" required />
			<button>Add User</button>
			<Clear userDataHandler={props.userDataHandler} />
		</form>
	)
}

export default Form;