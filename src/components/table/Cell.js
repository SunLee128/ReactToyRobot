import React, {useState} from 'react'

function Cell({x, y}) {
    const [hasRobot, setHasRobot] = useState(false)
    const style = {
        // backgroundColor:'red', 
        border: 'black solid 1px',
        width: '100px',
        height: '100px'
    }

    return (
        <div style={style} x={x} y={y} hasRobot={false}>
            {x},{y}
        </div>
    )
}

export default Cell
