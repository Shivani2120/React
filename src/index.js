import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyInfo from './componets/MyInfo';

// ReactDom.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)
// ReactDOM.render(<div><h1>hello </h1><p>This is a paragraph</p></div>, document.getElementById('root'));

//  const myVar = createElement("p")
//  myVar.innerHTML  = "this is a paragraph"

//ReactDOM.render(<ul><li>list1</li><li>list2</li><li>list3</li></ul>, document.getElementById('root'))

// function MyApp(){
//   return (
//     <ul><li>list1</li><li>list2</li><li>list3</li></ul>
//   )
// }
// ReactDOM.render(
//   <MyApp />, 
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <MyInfo/>,
//   document.getElementById("root")
// )

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

reportWebVitals();
