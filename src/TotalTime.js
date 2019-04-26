import React from 'react';

function TotalTime({input, handleType}) {
    return (
        <input value={input} onChange={(e) => {
            handleType(e.target.value)
        }} />
    )
}

export default TotalTime;