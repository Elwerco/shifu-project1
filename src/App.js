import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import NumberList from './Comp';
const history = createBrowserHistory();

const Home = () => (
	<div>
		<h2>Main page</h2>
	</div>
)

const Admin = () => (
	<div className="root1">
	</div>
)

class Navigation extends React.Component {
	render() {
		return(
			<BrowserRouter history={history}>
				<div>
					<Route exact path="/" component={Home}/>
					<Route path="/admin" component={NumberList}/>
				</div>
			</BrowserRouter>
		)
	}
}

export default Navigation;