// import React from 'react';
// import ReactDOM from "react-dom";

// const AdminAdd = () => (
// 	<div>
// 		<form>
// 			<h4>Название</h4>
// 			<input className="Input form-control" type="text" />
// 			<button className="but">Добавить</button>
// 		</form>
// 	</div>
// )
// const Btn = document.querySelectorAll('.but')[0];
// 		Btn.addEventListener('click', () => (
// 			Inp = document.querySelectorAll('.Input')[0].value;
// 			localStorage.setItem(Inp, Inp);
// 		);
// ) 

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ReactDOM from "react-dom";


export default class Login extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    const value = e.target.elements[0].value
    window.localStorage.setItem('myKey'+value, '{"title":"'+value+'","content": "", "slug": ""}')

  }
  render() {
    return (
        <div className='container'>
            <div className='jumbotron'>
                <h1 className='display-3 text-center'>Add to list</h1>
            </div>
            <div className='row'>
                <form className='col-md-4' onSubmit={this.handleSubmit}>
                    <input type='text' className='form-control' />
                    <button type='submit' className='btnlol btn btn-outline-primary'><Link to="/admin">Добавление</Link></button>
                </form>
            </div>
        </div>
    )
  }
}

// export default AdminAdd;