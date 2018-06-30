import React from 'react';
import {Link} from 'react-router-dom';
// import ReactDOM from "react-dom";
// const history = createBrowserHistory();


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
  	<div>
		<button className="btn btn-primary btn-key color-light"><Link to="/admin/add">Добавление элемента</Link></button>
		<div className="list-button">
		    <ul className="list-group">
		      {numbers.map((number) =>
		        <ListItem key={number.toString()}
		                  value={number} />
		      )}
	   		</ul>
	   		<div className="button-list">
		   		<Link to="/admin/edit/0"><button id="0" className="btn btn-primary btn-key">Редактировать</button></Link>
		   		<Link to="/admin/edit/1"><button id="1" className="btn btn-primary btn-key">Редактировать</button></Link>
		   		<Link to="/admin/edit/2"><button id="2" className="btn btn-primary btn-key">Редактировать</button></Link>
		   		<Link to="/admin/edit/3"><button id="3" className="btn btn-primary btn-key">Редактировать</button></Link>
		   		<Link to="/admin/edit/4"><button id="4" className="btn btn-primary btn-key">Редактировать</button></Link>
		   		<Link to="/admin/edit/5"><button id="5" className="btn btn-primary btn-key">Редактировать</button></Link>
		   		<Link to="/admin/edit/6"><button id="6" className="btn btn-primary btn-key">Редактировать</button></Link>
		   		<Link to="/admin/edit/7"><button id="7" className="btn btn-primary btn-key">Редактировать</button></Link>
		   		<Link to="/admin/edit/8"><button id="8" className="btn btn-primary btn-key">Редактировать</button></Link>
		   		<Link to="/admin/edit/9"><button id="9" className="btn btn-primary btn-key">Редактировать</button></Link>
		   	</div>
	   	</div>
    </div>
  );
}


const numbers = [Str, Str1, Str2, Str3, Str4, Str5, Str6, Str7, Str8, Str9];


function reply_click() {
	numbers.splice(1, 1);
}

const Admin = () => (
	<NumberList numbers={numbers}></NumberList>
)


export default Admin;