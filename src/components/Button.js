import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ReactDOM from "react-dom";
import AdminAdd from "./components/AdminAdd";
import AppCom0 from'./components/AppCom0';
const history = createBrowserHistory();	

class RouteSecond extends React.Component {
	render() {
		return(
			<BrowserRouter history={history}>
				<div>
					<ul className="in-cont1">
						<li className="inline1"><Link to="/admin/add">Admin Add</Link></li>
					</ul>
					<Route path="/admin/add" component={AdminAdd}/>
					<Route path="/admin/edit/0" component={AppCom0}/>
				</div>
			</BrowserRouter>
		)
	}
}

export default RouteSeconnd;