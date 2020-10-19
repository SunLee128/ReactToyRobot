import React from 'react'
import Button from './Button'

function ControlPad({commands,setCommands,currentFace, move, left, right }) {

    const handleMove = (currentFace) => {
        move(currentFace)
        // console.log(currentFace)
    }

    const handleLeft = (currentFace) => {
        left(currentFace)
    }

    const handleRight = (currentFace) => {
        right(currentFace)
    }

    const handleReset = () => {
        setCommands([])
    }
    return (
        <div>
            <Button name='MOVE' handleClick={handleMove} currentFace={currentFace} />
            <Button name='MOVE BACK' handleClick={handleRight} currentFace={currentFace}/> 
            <Button name='LEFT' handleClick={handleLeft} currentFace={currentFace}/>
            <Button name='RIGHT' handleClick={handleRight} currentFace={currentFace}/> 
            <Button name='RESET' handleClick={handleReset} /> 
        </div>
    )
}

export default ControlPad
