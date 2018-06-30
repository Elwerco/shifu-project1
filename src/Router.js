import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from "./components/Home";
import Admin from "./components/Admin";
import AdminAdd from "./components/AdminAdd";
import AppCom0 from'./components/AppCom0';
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
					<Route exact path="/admin" component={Admin}/>
					<Route path="/admin/add" component={AdminAdd}/>
					<Route path="/admin/edit/0" component={AppCom0}/>
				</div>
			</BrowserRouter>
		)
	}
}



export default Navigation;