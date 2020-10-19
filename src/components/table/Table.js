import React from 'react'
import Column from './Column'

function Table() {
    const style = {
        display: 'flex',
        // display: 'grid',
        // margin: "10px",
        // gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        // gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
        // gap: "0px 0px",
        // gridTemplateAreas: 
        // ". . . . ."
        // ". . . . ."
        // ". . . . ."
        // ". . . . ."
        // ". . . . ."
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
