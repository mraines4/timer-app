import React from 'react';

function TotalTime({input, handleType}) {
    return (
        <input type="number" defaultValue={input} onChange={(e) => {
            handleType(e.target.value)
        }} />
    )
}

export default TotalTime;