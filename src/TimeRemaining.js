import React from 'react';

function TimeRemaining({time, completion}) {
    return (
        <div>
            {!completion ? <h1>{time}</h1> : <h1>All done</h1>}
        </div>
    )
}

export default TimeRemaining;