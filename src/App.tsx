import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import Navigation from './components/Navigation';
function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favourites' element={<Favourites />} />
			</Routes>
		</>
	);
}

export default App;
