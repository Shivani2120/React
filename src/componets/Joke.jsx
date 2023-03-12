import React from "react";

function Joke(props){
    return (
        <div className="joke">
            <h1 style={{display: !props.question && "none"}}>Question: {props.question}</h1>
            <h1 style={{color: !props.question && "#888888"}}>Answer: {props.punchline}</h1>
        </div>
    )
}

export default Joke