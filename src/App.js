import React from 'react';

// Global Style
import GlobalStyle from './components/GlobalStyle'

// Import Pages
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import Nav from './components/Nav'

// Imort Router
import { Switch, Route } from 'react-router-dom'

function App() {
  	return (
    	<div className="app">
			<GlobalStyle />
			<Nav />
			
			<Switch>
				<Route path="/work">
					<OurWork />
				</Route>
				<Route path="/contact">
					<ContactUs />
				</Route>
				<Route path="/">
					<AboutUs />
				</Route>
			</Switch>
    	</div>
  	);
}

export default App;
