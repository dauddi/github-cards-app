import React, { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import CardList from './components/CardList';
import Form from './components/Form';

function App() {
	const userData = []
	const [profileData, setProfileData] = useState([...userData])

	return (
		<div className="app">
			<Heading title ="Github Cards App"/>
			<Form currentState={profileData} userDataHandler={setProfileData}/>
			<CardList card__object = {profileData}/>
		</div>
	);
}

export default App;