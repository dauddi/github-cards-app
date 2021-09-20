import React from 'react';
import './App.css';
import Heading from './components/Heading';
import CardList from './components/CardList';
import {testData} from './data';
import Form from './components/Form';

function App() {

	return (
		<div className="app">
			<Heading title ="Github Cards App"/>
			<Form />
			<CardList card__object = {testData}/>
		</div>
	);
}

export default App;