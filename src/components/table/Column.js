import React from 'react'
import Cell from './Cell'

function Column({x}) {
    return (
        <div>
            <Cell x={x} y='4'/>
            <Cell x={x} y='3'/>
            <Cell x={x} y='2'/>
            <Cell x={x} y='1'/>
            <Cell x={x} y='0'/>
        </div>
    )
}

export default Column
