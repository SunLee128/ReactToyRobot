import React from 'react'

function Cell({x, y}) {
    const style = {
        // backgroundColor:'red', 
        border: 'black solid 1px',
        width: '100px',
        height: '100px'
    }

    return (
        <div style={style} x={x} y={y}>
            {x},{y}
        </div>
    )
}

export default Cell
