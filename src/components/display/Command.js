import React from 'react'

function Command({command, x, y, face}) {
    return (
        <div >
            {command}, ({x},{y}),{face}
        </div>
    )
}

export default Command