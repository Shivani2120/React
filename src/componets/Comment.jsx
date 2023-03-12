import React from "react";
// import Avatar from "./Avatar";
import UserInfo from "./UserInfo";


function Comment(props){
   return(
    <div className="Comment">
        <div className="UserInfo">
            {/* <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
            /> */}
             {/* <Avatar user={props.author} /> */}
            {/* <div className="UserInfo-name">
                {props.author.name}
            </div> */}
        <UserInfo user={props.author}/>
        </div>
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {props.date}
        </div>
    </div>
   )
}

export default Comment