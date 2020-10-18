import React from 'react'

function Button({type, handleClick, handleReset, currentLocation}) {
    const style = {
        background: "#DB3B03",
        width: '100px',
        borderRadius: '16px',
        margin: '10px',
        padding: '0.3rem',
        color: 'white'
    }
    return (
        <div style={style} onClick={()=>handleClick(type, currentLocation)}>
            {type}
        </div>
    )
}

export default Button
