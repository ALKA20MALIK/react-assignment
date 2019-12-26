import React from "react";

const UserInput=(props)=>{
    const style={
        border:'1px solid #ccc',
        padding:'8px',
        //display:'block'

    }
    return(
        <div>
            <br></br>
            <input style={style} type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default UserInput