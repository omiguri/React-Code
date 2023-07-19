import React from "react";

function Todo() {
    function printvalue(e, fanme, lanme) {
        console.log(e);
        console.log(fanme + " " + lanme);
    }
    
    return (
        <input onChange={(e) => printvalue(e, "omi", "kobra")}></input>
        
    )

}
export default Todo;