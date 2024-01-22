import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

const App = () => {
	return (
		<Router>
			<div className="main">
				<h2 className="main-header">React CRUD Application</h2>
				<Routes>
					<Route exact path="/create" element={<Create />} />
					<Route exact path="/read" element={<Read />} />
					<Route path="/update" element={<Update />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
