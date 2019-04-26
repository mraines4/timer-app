import React from 'react';

function PauseUnpauseButton({status, handleClick}) {
    return (
    <button onClick={handleClick}>
        {status ? 'PAUSE' : 'START'}
    </button>
    )
}

export default PauseUnpauseButton;