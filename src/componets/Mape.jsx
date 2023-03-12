import React from "react";
import ListItems from "./ListItem";

// function Mape(){
//    const numbers = [1,2,3,4,5,6,7]
//    const listItems = numbers.map((number) => <li>{number * 2}</li>) 

//    return (
//     <div>
//         <ul>{listItems}</ul>
//     </div>
//    )
// }

// with props 

// function Mape(props){
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => <li key={number.toString()}>{number*2}</li>)

//     return (
//         <div>
//             <ul>{listItems}</ul>
//         </div>
//     )
// }


// with file and props
                           // this is not working 
// function Mape(props){
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => <ListItems key={number.toString()} value={number} />)
// };
// return (
//    <ul>{listItems}</ul>
// )
                       // this is working with jsx file
function Mape(props){
    const numbers = props.numbers;
    return (
      <ul>{ numbers.map((number) => <ListItems key={number.toString()} value={number} />
      )}
      </ul>
    )
};


export default Mape