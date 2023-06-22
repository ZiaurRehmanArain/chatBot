import React from "react";

function Translation({ doStuff,setinput }) {
    return (
        <div>
            <h1>Translation</h1>

            <textarea className="text-area" cols={80} rows={20} onChange={(e)=>setinput(e.target.value)}></textarea>
            <button className="action-btn" onClick={doStuff} >Response</button>
        </div>
    )
}

export default Translation