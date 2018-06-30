import React from "react";
import {Component} from "react";

var defaultPerem = localStorage.getItem('myKey');

class AppCom0 extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Установка фокуса на поле текстового ввода (input) с явным использованием исходного API DOM
    console.log(this.textInput.value);
    var perem = this.textInput.value;
    localStorage.getItem('myKey');
    localStorage.removeItem("myKey");
    localStorage.setItem('myKey', perem);
    window.location = "/admin";
  }

  render() {
    // Использование обратного вызова `ref` для сохранения ссылки на поле текстового ввода (input)
    // как элемента DOM в this.textInput.
   
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

export default AppCom0;