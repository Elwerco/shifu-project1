import React from "react";
import {Component} from "react";
import Admin from './Admin';
import { Route, Redirect } from 'react-router';


var defaultPerem = localStorage.getItem('myKey');

class AppCom9 extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.state = {isRedirect: false}
  }

  focus() {
    // Установка фокуса на поле текстового ввода (input) с явным использованием исходного API DOM
    console.log(this.textInput.value);
    let perem = this.textInput.value;
    // localStorage.getItem('myKey');
    // localStorage.removeItem("myKey");
    // localStorage.setItem('myKey', perem);
    var numb0 = JSON.parse(localStorage.getItem('Егор'));
    numb0[9] = perem;
    var jsn0 = JSON.stringify(numb0);
    localStorage.setItem('Егор', jsn0);
    this.setState({isRedirect: true});
  };

  //   const renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/admin'>
  //   }
  // }

  render() {

if (this.state.isRedirect) {
  return <Redirect to='/admin'/>
}

    return (
      <div>
        <input
          type="text"
          className="ac1-text form-control form-control-lg"
          defaultValue={defaultPerem}
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Сохранить"
          onClick={this.focus}
          className="ac1-btn btn btn-primary"
        />
      </div>
    );
  }
}

export default AppCom9;