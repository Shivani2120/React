import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import MyInfo from './componets/MyInfo';
import Joke from './componets/Joke';
import jokesData from './jokesData';
import Mape from './componets/Mape';
import Blog from './componets/Blog';
import Comment from './componets/Comment';
import Product from './componets/Product';
import products from './vsSchoolProducts';
import TodoItem from './componets/TodoItem';
import todosData from './todoData';
import Clock from './componets/Clock';
import Profile from './componets/Profile';
import imagePath from './images/image4.jpg'

// function App() {
//   const jokeComponents = jokesData.map((joke) => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)
//    const numbers = [1,2,3,4,5,6,7,8];
//    const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];
//   const productComponents = products.map((item) => <Product key={item.id} product={item} />)
//   const todoComponents = todosData.map((data) => <TodoItem key={data.id} data={data}/> )
 
//   return (
//     <div className="App">
//       {todoComponents}
//       {/* <Comment
//         author={{name: "harry poter", avatarUrl: "logo"}}
//         text="Lorem Ipsum has been the industry's standard"
//         date="08/03/23"
//       /> */}
//       {/* {productComponents} */}
//       {/* {jokeComponents} */}
//       {/* <MyInfo /> */}
//       {/* <Mape numbers={numbers} /> */}
//       {/* <Blog posts={posts} /> */}
//       {/* <Joke
//       punchline="ver since the 1500s, when an unknown printer took a galle"/>
//     <br/>
//     <Joke
//       question= "It is a long established fact that a reader will be d"
//       punchline="able content of a page when looking at its la"/>
//     <br/>
//     <Joke
//       question= "ng essentially unchanged. It was popularise"
//       punchline="e the 1500s, when an unknown printer took"/> */}
//     </div>
//   );
// }


//------------------Class Based Component-----------------------//

// class App extends React.Component{
//   render(){
//     // const date = new Date();
//     return (
//       <div>
//         <Header username="clecotech"/>
//         <Greeting/>
//       </div>
//     )
//   }
// }

// class Header extends React.Component{
//   render(){
//     return (
//       <header>
//         <p>Welcome, {this.props.username}</p>
//       </header>
//     )
//   }
// }

// class Greeting extends React.Component{
//   render(){
//     const date = new Date()
//     const hours = date.getHours()
//     let timeofDay

//     if (hours < 12){
//       timeofDay = "morning"
//     }else if (hours >= 12 && hours < 17){
//       timeofDay = "afternoon"
//     }else {
//       timeofDay = "night"
//     }
//     return (
//       <h1>Good {timeofDay} to you, sir or madam!</h1>
//     )
//   }
// }

// -----------------------state---------------------//

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       answer: "yes"
//     }
//   }

//   render(){
//     return(
//       <div>
//         <h1>Is state important to know? {this.state.answer}</h1>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       name: "shani",
//       age: "26"
//     }
//   }

//   render(){
//     return(
//       <div>
//         <h1>{this.state.name}</h1>
//         <h1>{this.state.age}</h1>
//       </div>
//     )
//   }
// }

// class App extends Component {
//    constructor(){
//     super()
//     this.state = {
//       isLogedIn: false
//     }
//    }

//    render(){
//     let wordDisplay
//     if (this.state.isLogedIn === true){
//       wordDisplay = "in"
//     }else{
//       wordDisplay = "out"
//     }
//     return(
//       <div>
//         <h1>you are currently logged {wordDisplay}</h1>
//       </div>
//     )
//    }
// }


// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       todos: todosData
//     }
//   }

//   render(){
//     const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
//     return(
//       <div>
//         {todoItems}
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(){
//     this.setState(prevState => {
//       return{
//         count: prevState.count + 1
//       }
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>change!</button>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render(){
//     return(
//       <Clock name="rahul" />
//     )
//   }
// }

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       todos: todosData
//     }
//   }

//   render(){
//     const todoComponents = this.state.todos.map((data) => <TodoItem key={data.id} data={data}/> )
//     return(
//       <div>
//         {todoComponents}
//         {/* <Clock />
//         <Profile /> */}
//         <img onMouseOver={() => console.log("Hovered")} src={imagePath} /><br/>
//         <button onClick={handleClick}>Click Me</button>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id){
     
  }

  render(){
    const todoComponents = this.state.todos.map((data) => <TodoItem key={data.id} data={data}/> )
    return(
      <div>
        {todoComponents}
      </div>
    )
  }
}

export default App;
