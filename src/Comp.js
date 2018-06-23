import '../css/style.css';
import React from "react";
import ReactDOM from "react-dom";

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



function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}

const numbers = [str, str1, str2, str3, str4, str5, str6, str7, str8, str9];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root1')
);

export default NumberList; 