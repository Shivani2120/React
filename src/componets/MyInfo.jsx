import React from "react";

function MyInfo(){
    const nums = [1,2,3,4,5,6,7,8,9]
    const doubled = nums.map(function(num){
        return num*27
    })
    console.log(doubled)

    return (
        <div>
            <h1>Shivani Shilpi</h1>
            <p>This is a paragraph</p>
            <ul><li>shimla</li><li>Manali</li><li>shilong</li></ul>
        </div>
    )
}

export default MyInfo