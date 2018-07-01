import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ReactDOM from "react-dom";
import AdminAdd from "./components/AdminAdd";
import AppCom0 from'./components/AppCom0';
import AppCom1 from'./components/AppCom1';
import AppCom2 from'./components/AppCom2';
import AppCom3 from'./components/AppCom3';
import AppCom4 from'./components/AppCom4';
import AppCom5 from'./components/AppCom5';
import AppCom6 from'./components/AppCom6';
import AppCom7 from'./components/AppCom7';
import AppCom8 from'./components/AppCom8';
import AppCom9 from'./components/AppCom9';

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
					<Route path="/admin/edit/1" component={AppCom1}/>
					<Route path="/admin/edit/2" component={AppCom2}/>
					<Route path="/admin/edit/3" component={AppCom3}/>
					<Route path="/admin/edit/4" component={AppCom4}/>
					<Route path="/admin/edit/5" component={AppCom5}/>
					<Route path="/admin/edit/6" component={AppCom6}/>
					<Route path="/admin/edit/7" component={AppCom7}/>
					<Route path="/admin/edit/8" component={AppCom8}/>
					<Route path="/admin/edit/9" component={AppCom9}/>
				</div>
			</BrowserRouter>
		)
	}
}

export default RouteSeconnd;

// {numbers.map((number) =>
// 		        <ListItem key={number.toString()}
// 		                  value={number} />