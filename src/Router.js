import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Admin from "./components/Admin"
const history = createBrowserHistory();	

class Navigation extends React.Component {
	render() {
		return(
			<BrowserRouter history={history}>
				<div>
					<ul className="in-cont">
						<li className="inline"><Link to="/">Home</Link></li>
						<li className="inline"><Link to="/admin">Admin</Link></li>
					</ul>
					<Route exact path="/" component={Home}/>
					<Route path="/admin" component={Admin}/>
				</div>
			</BrowserRouter>
		)
	}
}

export default Navigation;