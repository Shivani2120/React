import React from "react";

class Profile extends React.Component {
   constructor(){
    super()
    this.state = {
        age: 25,
        name: "karan",
        isLoggedIn: false
    }
   }

   render(){
    let wordDisplay
    if (this.state.isLoggedIn === true ){
        wordDisplay = "in"
    }else {
        wordDisplay = "out"
    }
    return (
        <div>
            <h1>Age: {this.state.age}</h1>
            <h1>Name: {this.state.name}</h1>
            <p>Profile Logged in or out: {wordDisplay} </p>
        </div> 
    )
   }
}

export default Profile;