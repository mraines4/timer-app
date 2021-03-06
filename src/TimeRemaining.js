import React from 'react';
import explosion from './explosion.gif'

function TimeRemaining({time, completion}) {
    return (
        <div>
            {!completion ? <h1>{time}</h1> : <img src={explosion} alt="something"></img>}
        </div>
    )
}

export default TimeRemaining;