import React from 'react'
import Column from './Column'

function Table() {
    const style = {
        display: 'flex',
        margin: "10px"
    }
    return (
        <div style={style}>
            <Column x='0'/>
            <Column x='1'/>
            <Column x='2'/>
            <Column x='3'/>
            <Column x='4'/>
        </div>
    )
}

export default Table
