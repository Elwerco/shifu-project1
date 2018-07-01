import React from 'react';
import {Link} from 'react-router-dom';
import event from './ListMass';

localStorage.setItem('Егор', JSON.stringify(event));

function ListItem(props) {
  return <li className="list-group-item">{props.value}</li>;
}


function NumberList(props) {
  var numbers = props.numbers;
  return (
  	<div>
		<button className="btn btn-primary btn-key color-light"><Link to="/admin/add">Добавление элемента</Link></button>
		<div className="list-button">
		    <ul className="list-group">

		      {numbers.map((number) => {
  				let item = JSON.stringify(number); 
  			return(
   				 <ListItem key={item} value={item}/>
  				)
			   }
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




const Admin = () => {
var numbers = JSON.parse(localStorage.getItem('Егор'));

return(
	<NumberList numbers={numbers}></NumberList>
	)
}


export default Admin;