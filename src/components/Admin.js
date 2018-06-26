import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ReactDOM from "react-dom";
const history = createBrowserHistory();


var event = {
  title: "Конференция",
  content: "строго для взрослых",
  slug: "что такое слаг"
};

var str = JSON.stringify(event);
var str1 = JSON.stringify(event);
var str2 = JSON.stringify(event);
var str3 = JSON.stringify(event);
var str4 = JSON.stringify(event);
var str5 = JSON.stringify(event);
var str6 = JSON.stringify(event);
var str7 = JSON.stringify(event);
var str8 = JSON.stringify(event);
var str9 = JSON.stringify(event);

localStorage.setItem("myKey", str)
localStorage.setItem("myKey1", str1)
localStorage.setItem("myKey2", str2)
localStorage.setItem("myKey3", str3)
localStorage.setItem("myKey4", str4)
localStorage.setItem("myKey5", str5)
localStorage.setItem("myKey6", str6)
localStorage.setItem("myKey7", str7)
localStorage.setItem("myKey8", str8)
localStorage.setItem("myKey9", str9)


var returnObj = JSON.parse(localStorage.getItem("myKey"))
var returnObj1 = JSON.parse(localStorage.getItem("myKey1"))
var returnObj2 = JSON.parse(localStorage.getItem("myKey2"))
var returnObj3 = JSON.parse(localStorage.getItem("myKey3"))
var returnObj4 = JSON.parse(localStorage.getItem("myKey4"))
var returnObj5 = JSON.parse(localStorage.getItem("myKey5"))
var returnObj6 = JSON.parse(localStorage.getItem("myKey6"))
var returnObj7 = JSON.parse(localStorage.getItem("myKey7"))
var returnObj8 = JSON.parse(localStorage.getItem("myKey8"))
var returnObj9 = JSON.parse(localStorage.getItem("myKey9"))

var Str = JSON.stringify(returnObj);
var Str1 = JSON.stringify(returnObj1);
var Str2 = JSON.stringify(returnObj2);
var Str3 = JSON.stringify(returnObj3);
var Str4 = JSON.stringify(returnObj4);
var Str5 = JSON.stringify(returnObj5);
var Str6 = JSON.stringify(returnObj6);
var Str7 = JSON.stringify(returnObj7);
var Str8 = JSON.stringify(returnObj8);
var Str9 = JSON.stringify(returnObj9);



function ListItem(props) {
  return <li className="list-group-item">{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul className="list-group">
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}

const numbers = [Str, Str1, Str2, Str3, Str4, Str5, Str6, Str7, Str8, Str9];


const Admin = () => (
	<NumberList numbers={numbers}/>
)


export default Admin;